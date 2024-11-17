import createMiddleware from 'next-intl/middleware'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from '@/i18n/routing'

/**
 * Gets language from URL or headers
 * Defaults if language not found
 * Ensures paths have /es or /en prefixes
 */
const intlMiddleware = createMiddleware(routing)

// Set protected routes
const protectedRoutes = ['/(en|es)/example', '/example']

export async function middleware(request: NextRequest) {
  // Use NextRequest to get the pathname
  const pathname = request.nextUrl.pathname

  // Localización con next-intl
  const response = intlMiddleware(request)

  // Verificar si el usuario está autenticado
  const token = await getToken({ req: request })

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Redirigir al inicio de sesión
  if (!token && isProtectedRoute) {
    const redirectUrl = new URL('/es/sign-in', request.url)
    redirectUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: ['/', '/(en|es)/:path*']
}
