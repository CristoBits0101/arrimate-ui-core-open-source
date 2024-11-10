import postBlackSVG from '@/modules/feeds/assets/icons/links/black/post.svg'
import postWhiteSVG from '@/modules/feeds/assets/icons/links/white/post.svg'
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

export default function Post() {
  return (
    <NavigationItem
      route='post'
      blackIcon={postBlackSVG}
      whiteIcon={postWhiteSVG}
    />
  )
}
