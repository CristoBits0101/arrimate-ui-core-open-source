import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export function useActiveRoute(route: string) {
  const path = usePathname()
  const locale = useLocale()
  return path === `/${locale}${route}`
}
