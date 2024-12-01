/**
 * Internationalized Request Configuration
 *
 * This file configures the server-side behavior for handling internationalized
 * requests in a Next.js application using the `next-intl` library
 */

// Import the `getRequestConfig` function from `next-intl/server`
// This function generates the necessary server configuration for handling localized requests
import { getRequestConfig } from 'next-intl/server'

// Import the routing configuration that defines supported locales and the default locale
import { routing } from '@/i18n/routing'

/**
 * Export a request configuration function
 * This function determines the appropriate locale and messages for each request
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // Attempt to determine the locale from the incoming request
  let locale = await requestLocale

  // If the locale is invalid or not supported, fall back to the default locale
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing)['locales'][number])
  ) {
    locale = routing.defaultLocale
  }

  // Return the locale and its associated translation messages
  return {
    // Ensure the locale is one of the supported values
    locale: locale as (typeof routing)['locales'][number],

    // Dynamically import the appropriate translation messages for the determined locale
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
