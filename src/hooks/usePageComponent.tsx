import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export function usePageComponent() {
  // Get -> /en/home
  const path = usePathname()
  // Get -> /en
  const locale = useLocale()

  // Paths
  const paths = {
    home: `/${locale}`,
    events: `/${locale}/events`,
    shorts: `/${locale}/shorts`,
    videos: `/${locale}/videos`,
    live: `/${locale}/live`,
    products: `/${locale}/products`,
    reviews: `/${locale}/reviews`
  }

  // Check if current path is active
  switch (path) {
    case paths.home:
      return 'Records'

    case paths.events:
      return 'Events page'

    case paths.shorts:
      return 'Shorts page'

    case paths.videos:
      return 'Panel'

    case paths.live:
      return 'Subscriptions'

    case paths.products:
      return 'Products page'

    case paths.reviews:
      return 'Reviews page'

    default:
      return 'Not found'
  }
}
