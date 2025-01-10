'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Icons
import postBlackSVG from '@/assets/icons/navigation/active/light-theme/feeds/post-light-icon.svg'
import postWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/feeds/post-light-icon.svg'

export default function Post() {
  return (
    <NavigationItem
      route='post'
      blackIcon={postBlackSVG}
      whiteIcon={postWhiteSVG}
    />
  )
}
