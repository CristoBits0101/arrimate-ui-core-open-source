'use client'

// Components
import NavigationItem from '@/layouts/aside/sidebar/sidebar-link'

// Icons
import postBlackSVG from '@/modules/feeds/assets/icons/links/black/post-light.svg'
import postWhiteSVG from '@/modules/feeds/assets/icons/links/white/post-light.svg'

export default function Post() {
  return (
    <NavigationItem
      route='post'
      blackIcon={postBlackSVG}
      whiteIcon={postWhiteSVG}
    />
  )
}
