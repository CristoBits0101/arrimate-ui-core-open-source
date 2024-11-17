import createMiddleware from 'next-intl/middleware'
import { auth } from './lib/auth'
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import { routing } from '@/i18n/routing'

// Language enforcement
const intlMiddleware = createMiddleware(routing)

// Protected routes
const protectedRoutes = ['/(en|es)/example', '/example']

export default auth((request) => {
  // Get pathname
  const pathname = request.nextUrl.pathname

  // Token verification
  const token = getToken({ req: request })

  // Check protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Check access
  if (!token && isProtectedRoute) {
    const locale = request.nextUrl.locale || 'en'
    const redirectUrl = new URL(`/${locale}/sign-in`, request.url)
    redirectUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // Handles language
  const response = intlMiddleware(request)

  return response
})

// Allows middleware
export const config = {
  matcher: ['/', '/(en|es)/:path*']
}
