// lib
import { db } from '@/lib/db'

// modules/auth
import { getUserById } from '@/modules/auth/data/user-data'

// next-auth
import authConfig from '@/lib/auth.config'
import NextAuth from 'next-auth'

// Prisma
import { PrismaAdapter } from '@auth/prisma-adapter'

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Configure what user data is returned
  callbacks: {
    // Checks user existence and email verified before sign-in
    async signIn({ user }) {
      if (!user.id) return false // Verificar que el ID exista
      const existingUser = await getUserById(user.id)
      if (!existingUser || !existingUser.emailVerified) return false
      return true
    },
    // Adds user ID and role to the session
    async session({ token, session }) {
      if (token.sub && session.user) session.user.id = token.sub
      if (token.role && session.user)
        session.user.role = token.role as 'ADMIN' | 'USER'
      return session
    },
    // Adds user role to the JWT token
    async jwt({ token }) {
      if (!token.sub) return token
      const userId = token.sub
      const existingUser = await getUserById(userId)
      if (!existingUser) return token
      token.role = existingUser.role as 'ADMIN' | 'USER'
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
