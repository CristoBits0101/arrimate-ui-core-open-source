'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Icons
import notificationsBlackSVG from '@/assets/icons/navigation/active/light-theme/messages/notifications-light-icon.svg'
import notificationsWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/messages/notifications-light-icon.svg'

export default function Notifications() {
  return (
    <NavigationItem
      route='notifications'
      blackIcon={notificationsBlackSVG}
      whiteIcon={notificationsWhiteSVG}
    />
  )
}
