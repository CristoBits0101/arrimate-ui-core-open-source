// next/server
import { NextResponse, type NextRequest } from 'next/server'

// next-intl
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

// next-auth
import { auth } from '@/lib/auth'

// next-intl
const intlMiddleware = createIntlMiddleware(routing)

export default async function middleware(request: NextRequest) {
  // next-auth
  auth((request) => {
    console.log(`Route: ${request.nextUrl.pathname}`)
    NextResponse.next()
  })

  // next-intl
  const intlResponse = intlMiddleware(request)
  if (createIntlMiddleware(routing)) return intlResponse

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
