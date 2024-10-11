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
    community: `/${locale}/community`,
    post: `/${locale}/post`,
    chats: `/${locale}/chats`,
    notifications: `/${locale}/notifications`,
    cart: `/${locale}/cart`,
    settings: `/${locale}/settings`
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

    case paths.post:
      return 'POST PANEL'

    case paths.chats:
      return 'CHATS PANEL'

    case paths.notifications:
      return 'NOTIFICATIONS PANEL'

    case paths.cart:
      return 'CART PANEL'

    case paths.settings:
      return 'SETTINGS PANEL'

    default:
      return 'DEFAULT PANEL'
  }
}
