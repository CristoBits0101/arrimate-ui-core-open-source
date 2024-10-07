import eventsBlackSVG from '@/assets/icons/sidebar/black/events.svg'
import eventsWhiteSVG from '@/assets/icons/sidebar/white/events.svg'
import NavigationItem from '@/components/navigation/navigation-item'

export default function Events() {
  return (
    <NavigationItem
      route='events'
      blackIcon={eventsBlackSVG}
      whiteIcon={eventsWhiteSVG}
      textKey='events'
    />
  )
}
