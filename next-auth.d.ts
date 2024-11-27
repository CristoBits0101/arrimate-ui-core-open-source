import { DefaultSession } from 'next-auth'

// Extend the Session type to include user.role
declare module 'next-auth' {
  interface Session {
    user: {
      role: 'ADMIN' | 'USER'
      id: string
    } & DefaultSession['user']
  }

  interface User {
    role: 'ADMIN' | 'USER'
  }
}

// Extend the JWT type to include role
declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'ADMIN' | 'USER'
  }
}
