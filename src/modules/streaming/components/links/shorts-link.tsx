import shortsBlackSVG from '@/assets/icons/navbar/black/shorts.svg'
import shortsWhiteSVG from '@/assets/icons/navbar/white/shorts.svg'
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
