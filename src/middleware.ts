// config/routes
import { API_AUTH_ROUTE, AUTH_ROUTES, PUBLIC_ROUTES } from '@/config/routes'

// next-auth
import authConfig from '@/modules/auth/lib/auth.config'
import NextAuth from 'next-auth'

// next-intl
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

// next-auth
const { auth } = NextAuth(authConfig)

// next-intl
const intlMiddleware = createMiddleware(routing)

export default auth((request) => {
  // Get origin
  const origin = request.nextUrl.origin

  // Get pathname
  const pathname = request.nextUrl.pathname

  // Check login
  const isLoggedIn = !!request.auth

  // Check routes
  const isApiAuthRoute = pathname.startsWith(API_AUTH_ROUTE)
  const isAuthRoute = AUTH_ROUTES.includes(pathname)
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname)

  // Check API
  if (isApiAuthRoute) return

  // Redirect home
  if (isLoggedIn && isAuthRoute) request.nextUrl.href = `${origin}/`

  // Redirect sign-in
  if (!isLoggedIn && !isPublicRoute) request.nextUrl.href = `${origin}/sign-in`

  // Apply language
  const response = intlMiddleware(request)

  // Return path
  return response
})

// Run middleware
export const config = {
  matcher: [
    '/',
    '/(en|es)',
    '/(en|es)/:path*',
    '/((?!.*\\.[\\w]+$|_next).*)',
    '/(api|trpc)(.*)'
  ]
}
