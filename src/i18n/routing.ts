// Define locale-based routing
import { defineRouting } from 'next-intl/routing'

// Navigation utilities
import { createNavigation } from 'next-intl/navigation'

// Routing with supported and default locales
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en'
})

// Multi-locale navigation utilities
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)

// Locale type for validation
export type Locale = (typeof routing)['locales'][number]
