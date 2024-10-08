import followingBlackSVG from '@/assets/icons/sidebar/black/following.svg'
import followingWhiteSVG from '@/assets/icons/sidebar/white/following.svg'
import NavigationItem from '@/components/navigation/menu/item'

export default function Following() {
  return (
    <NavigationItem
      route='following'
      blackIcon={followingBlackSVG}
      whiteIcon={followingWhiteSVG}
      textKey='following'
    />
  )
}
