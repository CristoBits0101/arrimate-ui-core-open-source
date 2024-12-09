import communityBlackSVG from '@/modules/network/assets/black/community.svg'
import communityWhiteSVG from '@/modules/network/assets/white/community.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

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
