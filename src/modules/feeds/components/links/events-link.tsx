import eventsBlackSVG from '@/modules/feeds/assets/icons/links/black/events.svg'
import eventsWhiteSVG from '@/modules/feeds/assets/icons/links/white/events.svg'
import NavigationItem from '@/modules/navigation/components/links/navbar-link'

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
