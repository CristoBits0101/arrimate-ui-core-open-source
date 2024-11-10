import eventsBlackSVG from '@/assets/icons/navbar/black/events.svg'
import eventsWhiteSVG from '@/assets/icons/navbar/white/events.svg'
import NavigationItem from '@/components/navigation/links/navbar-link'

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
