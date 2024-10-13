import shortsBlackSVG from '@/assets/icons/navbar/black/shorts.svg'
import shortsWhiteSVG from '@/assets/icons/navbar/white/shorts.svg'
import NavigationItem from '@/components/navigation/links/navbar-item'

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
