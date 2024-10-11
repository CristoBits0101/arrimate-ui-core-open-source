import liveBlackSVG from '@/assets/icons/navbar/black/live.svg'
import liveWhiteSVG from '@/assets/icons/navbar/white/live.svg'
import NavigationItem from '@/components/navigation/links/item'

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
