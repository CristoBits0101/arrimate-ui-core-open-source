import notificationsBlackSVG from '@/assets/icons/navbar/black/notifications.svg'
import notificationsWhiteSVG from '@/assets/icons/navbar/white/notifications.svg'
import NavigationItem from '@/components/navigation/navigation-item'

export default function Notifications() {
  return (
    <NavigationItem
      route='notifications'
      blackIcon={notificationsBlackSVG}
      whiteIcon={notificationsWhiteSVG}
    />
  )
}
