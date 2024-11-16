import createMiddleware from 'next-intl/middleware'
import { getToken } from 'next-auth/jwt'
import { routing } from '@/i18n/routing'
import { NextRequest, NextResponse } from 'next/server'

// Localización
const intlMiddleware = createMiddleware(routing)

// Rutas protegidas
const protectedRoutes = ['/(en|es)/dashboard', '/dashboard']

export async function middleware(request: NextRequest) {
  // Usa nextUrl para obtener el pathname
  const pathname = request.nextUrl.pathname

  // Localización con next-intl
  const response = intlMiddleware(request)

  // Verificar si el usuario está autenticado
  const token = await getToken({ req: request })

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  if (!token && isProtectedRoute) {
    // Redirigir al inicio de sesión
    const redirectUrl = new URL('/sign-in', request.url)
    redirectUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: ['/', '/(en|es)/:path*']
}
