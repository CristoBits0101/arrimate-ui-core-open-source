'use client'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// Navigation
import { usePathname } from 'next/navigation'

// Panels
import PostsPanel from '@/layouts/aside/panels/components/boxes/posts-panel'
import SettingsPanel from '@/layouts/aside/panels/components/boxes/settings-panel'
import StoriesPanel from '@/layouts/aside/panels/components/boxes/stories-panel'

export function usePageComponent() {
  // Translations
  const hpt = useTranslations('StoriesPanel')
  
  // Get -> /en/stories
  const path = usePathname()
  // Get -> en
  const locale = useLocale()

  // Paths
  const paths = {
    stories: `/${locale}`,
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
    case paths.stories:
      return (
        <StoriesPanel
          emoji={hpt('emoji')}
          emojiTwo={hpt('emojiTwo')}
          title={hpt('title')}
          titleTwo={hpt('titleTwo')}
        />
      )

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
      return <PostsPanel />

    case paths.chats:
      return 'CHATS PANEL'

    case paths.notifications:
      return 'NOTIFICATIONS PANEL'

    case paths.cart:
      return 'CART PANEL'

    case paths.settings:
      return <SettingsPanel />

    default:
      return 'DEFAULT PANEL'
  }
}
