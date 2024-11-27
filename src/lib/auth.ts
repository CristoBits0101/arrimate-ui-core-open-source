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
    //
    async session({ token, session }) {
      if (token.sub && session.user) session.user.id = token.sub
      if (token.role && session.user)
        session.user.role = token.role as 'ADMIN' | 'USER'
      return session
    },
    //
    async jwt({ token }) {
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
      token.role = existingUser.role as 'ADMIN' | 'USER'
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig
})
