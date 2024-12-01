/**
 * Internationalized Routing and Navigation Setup
 *
 * This code configures routing and navigation for a Next.js application
 * using `next-intl`, a library for handling internationalization
 */

// Import the `defineRouting` function to set up locale-based routing
// This function allows you to define supported locales and a default locale
import { defineRouting } from 'next-intl/routing'

// Import the `createNavigation` function to generate navigation utilities
// These utilities simplify working with navigation in a multi-locale app
import { createNavigation } from 'next-intl/navigation'

// Define the routing configuration
// - `locales`: Specifies the supported languages ('en' for English, 'es' for Spanish)
// - `defaultLocale`: Sets English ('en') as the default language if no locale is specified
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en'
})

// Create navigation utilities based on the defined routing configuration
// These include:
// - `Link`: A component for rendering locale-aware navigation links
// - `redirect`: A utility for programmatic navigation with locale awareness
// - `usePathname`: A hook to get the current path with locale context
// - `useRouter`: A hook for advanced routing logic within a multi-locale setup
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)

// Define a type `Locale` based on the `locales` array
// This ensures that any references to locales in the code are type-safe and restricted
// to the values defined in the `locales` configuration
export type Locale = (typeof routing)['locales'][number]
