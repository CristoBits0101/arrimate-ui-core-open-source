import shortsBlackSVG from '@/assets/icons/sidebar/black/shorts.svg'
import shortsWhiteSVG from '@/assets/icons/sidebar/white/shorts.svg'
import NavigationItem from '@/components/navigation/links/item'

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
