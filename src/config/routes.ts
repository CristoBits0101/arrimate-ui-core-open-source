/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 */
export const publicRoutes: string[] = ['/(en|es)']

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /(en|es)/settings
 */
export const authRoutes: string[] = [
  '/en/sign-in',
  '/en/sign-up',
  '/es/sign-in',
  '/es/sign-up'
]

/**
 * A prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 */
export const apiAuthPrefix: string = '/(en|es)/api/auth'

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT: string = '/(en|es)/settings'
