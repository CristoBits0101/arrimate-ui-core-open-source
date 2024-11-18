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
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes
} from '@/config/routes'

//
const { auth } = NextAuth(authConfig)

// Language routing
const intlMiddleware = createMiddleware(routing)

export default auth((request) => {
  //
  const { nextUrl } = request

  // Check login
  const isLoggedIn = !!request.auth

  //
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

  //
  if (isApiAuthRoute) return new Response(null, { status: 204 })

  //
  if (isAuthRoute && isLoggedIn)
    return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, request.url))

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
