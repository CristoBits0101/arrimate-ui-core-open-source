// next-auth
import authConfig from '@/lib/auth.config'
import NextAuth from 'next-auth'

// next-intl
import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

// next/server
import { NextResponse } from 'next/server'

// Route definition
import {
  API_AUTH_PREFIX,
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES
} from '@/config/routes'

//
const { auth } = NextAuth(authConfig)

// Language routing
const intlMiddleware = createMiddleware(routing)

export default auth((request) => {
  // Get URL
  const { nextUrl } = request

  // Get language
  const locale = request.nextUrl.locale || 'en'

  // Add language
  // const apiAuthRoute = `/${locale}${API_AUTH_PREFIX}`
  // const defaultLoginRedirect = `/${locale}${DEFAULT_LOGIN_REDIRECT}`

  // Remove language
  const pathname = nextUrl.pathname

  // Check routes
  const isApiAuthRoute = pathname.includes(API_AUTH_PREFIX)
  const isAuthRoute = AUTH_ROUTES.includes(pathname)
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname)

  // Check login
  const isLoggedIn = !!request.auth

  //
  if (isApiAuthRoute) return new Response(null, { status: 204 })

  // Redirect home
  if (isLoggedIn && isAuthRoute)
    return NextResponse.redirect(
      new URL(`${DEFAULT_LOGIN_REDIRECT}/${locale}`, nextUrl)
    )

  // Redirect sign-in
  if (!isLoggedIn && !isPublicRoute)
    return NextResponse.redirect(new URL(`/${locale}/sign-in`, nextUrl))

  // Apply language
  const response = intlMiddleware(request)

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
