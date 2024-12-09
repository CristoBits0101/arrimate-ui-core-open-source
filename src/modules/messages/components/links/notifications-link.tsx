import notificationsBlackSVG from '@/modules/messages/assets/black/notifications.svg'
import notificationsWhiteSVG from '@/modules/messages/assets/white/notifications.svg'
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
