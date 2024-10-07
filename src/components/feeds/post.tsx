import postBlackSVG from '@/assets/icons/navbar/black/post.svg'
import postWhiteSVG from '@/assets/icons/navbar/white/post.svg'
import NavigationItem from '@/components/navigation/navigation-item'

export default function Post() {
  return (
    <NavigationItem
      route='post'
      blackIcon={postBlackSVG}
      whiteIcon={postWhiteSVG}
    />
  )
}
