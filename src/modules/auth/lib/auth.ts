// Import the database instance
import { db } from '@/lib/db'

// Import user-related functions
import { getUserById } from '@/modules/auth/data/users/user-data'

// Import authentication configurations
import authConfig from '@/modules/auth/lib/auth.config'
import NextAuth from 'next-auth'

// Import Prisma adapter for NextAuth
import { PrismaAdapter } from '@auth/prisma-adapter'

// Export authentication handlers and helpers
export const { handlers, signIn, signOut, auth } = NextAuth({
  // Define custom pages for authentication flows
  pages: {
    // Custom sign-in page
    signIn: '/sign-in',
    // Page for authentication errors
    error: '/unauthorized-access',
    // Email verification request page
    verifyRequest: '/auth/verify-request',
    // Redirect page for new users
    newUser: '/'
  },
  // Define event handlers
  events: {
    // Event triggered when an account is linked
    async linkAccount({ user }) {
      // Mark the user's email as verified in the database
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  // Configure callbacks to control authentication behavior
  callbacks: {
    // Validate user and account before sign-in
    async signIn({ user, account }) {
      // Allow OAuth providers (e.g., Google, Apple) without email verification
      if (account?.provider !== 'credentials') return true

      // If using credentials, ensure the user exists and has a valid email
      if (!user.id) return false
      const existingUser = await getUserById(user.id)

      // Prevent sign-in if the user's email is not verified
      if (!existingUser?.emailVerified) return false

      // TODO: Implement additional checks (e.g., 2FA)

      // Allow sign-in if all checks pass
      return true
    },

    // Include user ID and role in the session object sent to the client
    async session({ token, session }) {
      // Attach user ID to the session
      if (token.sub && session.user) session.user.id = token.sub

      // Attach user role (e.g., ADMIN, USER) to the session
      if (token.role && session.user)
        session.user.role = token.role as 'ADMIN' | 'USER'

      // Return the updated session
      return session
    },

    // Include user role in the JWT token
    async jwt({ token }) {
      // Skip if the token has no user ID (sub)
      if (!token.sub) return token

      // Retrieve the user's data by ID
      const userId = token.sub
      const existingUser = await getUserById(userId)

      // Skip if the user does not exist
      if (!existingUser) return token

      // Add the user's role to the JWT token
      token.role = existingUser.role as 'ADMIN' | 'USER'

      // Return the updated token
      return token
    }
  },
  // Configure Prisma adapter to handle database operations
  adapter: PrismaAdapter(db),

  // Use JWT strategy for session management
  session: { strategy: 'jwt' },

  // Merge additional authentication configurations
  ...authConfig
})
