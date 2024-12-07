// Import defineRouting for locale-based routing
import { defineRouting } from 'next-intl/routing'

// Import createNavigation for navigation utilities
import { createNavigation } from 'next-intl/navigation'

// Set up routing with supported and default locales
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en'
})

// Generate navigation utilities for multi-locale support
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)

// Define Locale type for supported locale validation
export type Locale = (typeof routing)['locales'][number]
