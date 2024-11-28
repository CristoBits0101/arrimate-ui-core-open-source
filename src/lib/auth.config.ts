// bcryptjs
import bcrypt from 'bcryptjs'

// modules/auth
import { getUserByEmail } from '@/modules/auth/data/user-data'
import { SignInSchema } from '@/modules/auth/schemas/index'

// next-auth
import type { NextAuthOptions } from 'next-auth'

// Providers
import Credentials from 'next-auth/providers/credentials'
import Apple from 'next-auth/providers/apple'
import Facebook from 'next-auth/providers/facebook'
import Google from 'next-auth/providers/google'
import Microsoft from 'next-auth/providers/microsoft-entra-id'
import Twitter from 'next-auth/providers/twitter'

// Backend code
export default {
  providers: [
    Apple({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Microsoft({
      clientId: process.env.MICROSOFT_CLIENT_ID,
      clientSecret: process.env.MICROSOFT_CLIENT_SECRET
    }),
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    }),
    Credentials({
      // Verify login
      async authorize(credentials) {
        // 1. Validate inputs
        const validatedFields = SignInSchema.safeParse(credentials)
        // 2. Validate success
        if (validatedFields.success) {
          // 3. Get data
          const { email, password } = validatedFields.data
          // 4. Get user
          const user = await getUserByEmail(email)
          // 5. Error getting
          if (!user || !user.password) return null
          // 6. Compare passwords
          const passwordsMatch = await bcrypt.compare(password, user.password)
          // 7. Authentication successful
          if (passwordsMatch) return user
        }
        // 8. Authentication failed
        return null
      }
    })
  ]
} satisfies NextAuthOptions
