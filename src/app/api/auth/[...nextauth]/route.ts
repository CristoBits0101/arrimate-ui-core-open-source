// Import authentication request handlers
import { handlers } from '@/modules/auth/lib/auth'

// Export GET and POST methods for NextAuth.js
export const { GET, POST } = handlers
