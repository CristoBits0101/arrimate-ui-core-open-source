// next/server
import {
  NextResponse,
  type NextRequest,
  type NextFetchEvent
} from 'next/server'

// next-intl
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

// next-auth
import { auth } from '@/lib/auth'

// next-intl
const intlMiddleware = createIntlMiddleware(routing)

// next-auth
const authMiddleware = auth(async (req: NextRequest) => {})

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {

  // next-intl
  const intlResponse = intlMiddleware(req)
  if (intlResponse) return intlResponse

  // next-auth
  const authResponse = await authMiddleware(req, ev)
  if (authResponse) return authResponse

  // Exit
  return NextResponse.next()

}

// Paths
export const config = {
  matcher: [
    '/',
    '/(en|es)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
