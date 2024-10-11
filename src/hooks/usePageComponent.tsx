import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export function usePageComponent() {
  // Get -> /en/home
  const path = usePathname()
  // Get -> en
  const locale = useLocale()

  // Paths
  const paths = {
    home: `/${locale}`,
    events: `/${locale}/events`,
    shorts: `/${locale}/shorts`,
    videos: `/${locale}/videos`,
    live: `/${locale}/live`,
    products: `/${locale}/products`,
    reviews: `/${locale}/reviews`,
    community: `/${locale}/community`
  }

  // Check if current path is active
  switch (path) {
    case paths.home:
      return 'HOME PANEL'

    case paths.events:
      return 'EVENTS PANEL'

    case paths.shorts:
      return 'SHORTS PANEL'

    case paths.videos:
      return 'VIDEOS PANEL'

    case paths.live:
      return 'LIVE PANEL'

    case paths.products:
      return 'PRODUCTS PANEL'

    case paths.reviews:
      return 'REVIEWS PANEL'

    case paths.community:
      return 'COMMUNITY PANEL'

    default:
      return 'Not found'
  }
}
