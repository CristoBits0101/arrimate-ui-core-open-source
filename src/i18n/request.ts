// Server-side localization setup
import { getRequestConfig } from 'next-intl/server'

// Routing with supported and default locales
import { routing } from '@/i18n/routing'

// Configure locale and load translations
export default getRequestConfig(async ({ requestLocale }) => {
  // Use request locale or fallback to default
  let locale = await requestLocale
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing)['locales'][number])
  ) {
    locale = routing.defaultLocale
  }
  // Return locale and translation messages
  return {
    locale: locale as (typeof routing)['locales'][number],
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
