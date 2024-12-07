// Import configuration function for server-side localization
import { getRequestConfig } from 'next-intl/server'

// Import routing settings with supported and default locales
import { routing } from '@/i18n/routing'

// Export function to configure locale and load translation messages
export default getRequestConfig(async ({ requestLocale }) => {
  // Get locale from the request or use the default if invalid
  let locale = await requestLocale
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing)['locales'][number])
  ) {
    locale = routing.defaultLocale
  }

  // Return locale and its translation messages
  return {
    locale: locale as (typeof routing)['locales'][number],
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
