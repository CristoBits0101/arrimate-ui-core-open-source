import postBlackSVG from '@/assets/icons/sidebar/black/post.svg'
import postWhiteSVG from '@/assets/icons/sidebar/white/post.svg'
import NavigationItem from '@/components/navigation/links/sidebar-link'

export default function Post() {
  return (
    <NavigationItem
      route='post'
      blackIcon={postBlackSVG}
      whiteIcon={postWhiteSVG}
    />
  )
}
