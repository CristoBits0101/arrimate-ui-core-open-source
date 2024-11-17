import createMiddleware from 'next-intl/middleware'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from '@/i18n/routing'

// Language enforcement
const intlMiddleware = createMiddleware(routing)

// Protected routes
const protectedRoutes = ['/(en|es)/example', '/example']

/**
 * Middleware to handle language localization and access control
 *
 * @param {NextRequest} request - The incoming request object
 * @returns {Promise<NextResponse>} - The response object after processing
 */
export async function middleware(request: NextRequest): Promise<NextResponse> {
  // Get pathname
  const pathname = request.nextUrl.pathname

  // Login verification
  const token = await getToken({ req: request })

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
}

// Allows middleware
export const config = {
  matcher: ['/', '/:path*', '/(en|es)/:path*']
}
