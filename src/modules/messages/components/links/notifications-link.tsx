import notificationsBlackSVG from '@/modules/messages/assets/icons/links/black/notifications.svg'
import notificationsWhiteSVG from '@/modules/messages/assets/icons/links/white/notifications.svg'
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
