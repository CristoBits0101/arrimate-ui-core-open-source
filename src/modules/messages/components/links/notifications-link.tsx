import notificationsBlackSVG from '@/modules/messages/assets/black/notifications-light.svg'
import notificationsWhiteSVG from '@/modules/messages/assets/white/notifications-light.svg'
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

export default function Notifications() {
  return (
    <NavigationItem
      route='notifications'
      blackIcon={notificationsBlackSVG}
      whiteIcon={notificationsWhiteSVG}
    />
  )
}
