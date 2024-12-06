// lib
import { db } from '@/lib/db'

// modules/auth
import { getUserById } from '@/modules/auth/data/users/user-data'

// next-auth
import authConfig from '@/modules/auth/lib/auth.config'
import NextAuth from 'next-auth'

// Prisma
import { PrismaAdapter } from '@auth/prisma-adapter'

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/sign-in',
    error: '/unauthorized-access',
    verifyRequest: '/auth/verify-request',
    newUser: '/'
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() }
      })
    }
  },
  // Configure what user data is returned
  callbacks: {
    // Checks user existence and email verified before sign-in
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== 'credentials') return true

      //
      if (!user.id) return false
      const existingUser = await getUserById(user.id)

      // Prevent sign in without email verification
      if (!existingUser?.emailVerified) return false

      // TODO: Add 2FA check

      // 
      return true
    },

    // Adds user ID and role to the session
    async session({ token, session }) {
      //
      if (token.sub && session.user) session.user.id = token.sub

      //
      if (token.role && session.user)
        session.user.role = token.role as 'ADMIN' | 'USER'

      //
      return session
    },

    // Adds user role to the JWT token
    async jwt({ token }) {
      //
      if (!token.sub) return token

      //
      const userId = token.sub
      const existingUser = await getUserById(userId)

      //
      if (!existingUser) return token

      //
      token.role = existingUser.role as 'ADMIN' | 'USER'

      //
      return token
    }
  },
  // Configures Prisma adapter for database connection with NextAuth
  adapter: PrismaAdapter(db),

  // Uses JSON Web Tokens (JWT) for session management
  session: { strategy: 'jwt' },

  // Adds custom settings to authentication configurations
  ...authConfig
})
