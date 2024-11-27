// lib
import { db } from '@/lib/db'

// modules/auth
import { getUserById } from '@/modules/auth/data/user-data'

// next-auth
import authConfig from '@/lib/auth.config'
import NextAuth, {DefaultSession} from 'next-auth'

// Prisma
import { PrismaAdapter } from '@auth/prisma-adapter'

// 


export const { handlers, signIn, signOut, auth } = NextAuth({
  // Configure what user data is returned
  callbacks: {
    async session({ token, session }) {
      console.log(token)
      if (token.sub && session.user) session.user.id = token.sub
      return session
    },
    //
    async jwt({ token }) {
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
      token.role = existingUser.role
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig
})
