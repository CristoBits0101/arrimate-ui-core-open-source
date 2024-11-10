import shortsBlackSVG from '@/modules/streaming/assets/icons/links/black/shorts.svg'
import shortsWhiteSVG from '@/modules/streaming/assets/icons/links/white/shorts.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Shorts() {
  return (
    <NavigationItem
      route='shorts'
      blackIcon={shortsBlackSVG}
      whiteIcon={shortsWhiteSVG}
      textKey='shorts'
    />
  )
}
