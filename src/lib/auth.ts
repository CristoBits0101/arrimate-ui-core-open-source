import authConfig from '@/lib/auth.config'
import NextAuth from 'next-auth'
import { db } from '@/lib/db'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const { handlers, signIn, signOut, auth } = NextAuth({
  // Configure what user data is returned
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) session.user.id = token.sub
      return session
    },
    // 
    async jwt({ token }) {
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig
})
