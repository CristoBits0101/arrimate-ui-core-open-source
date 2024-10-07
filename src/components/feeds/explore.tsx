import exploreBlackSVG from '@/assets/icons/sidebar/black/explore.svg'
import exploreWhiteSVG from '@/assets/icons/sidebar/white/explore.svg'
import NavigationItem from '@/components/navigation/navigation-item'

export default function Explore() {
  return (
    <NavigationItem
      route='explore'
      blackIcon={exploreBlackSVG}
      whiteIcon={exploreWhiteSVG}
      textKey='explore'
    />
  )
}
