import communityBlackSVG from '@/assets/icons/sidebar/black/community.svg'
import communityWhiteSVG from '@/assets/icons/sidebar/white/community.svg'
import NavigationItem from '@/components/navigation/links/item'

export default function Community() {
  return (
    <NavigationItem
      route='community'
      blackIcon={communityBlackSVG}
      whiteIcon={communityWhiteSVG}
      textKey='community'
    />
  )
}
