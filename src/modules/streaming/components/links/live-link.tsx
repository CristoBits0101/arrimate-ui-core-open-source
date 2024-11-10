import liveBlackSVG from '@/modules/streaming/assets/icons/links/black/live.svg'
import liveWhiteSVG from '@/modules/streaming/assets/icons/links/white/live.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

export default function Live() {
  return (
    <NavigationItem
      route='live'
      blackIcon={liveBlackSVG}
      whiteIcon={liveWhiteSVG}
      textKey='live'
    />
  )
}
