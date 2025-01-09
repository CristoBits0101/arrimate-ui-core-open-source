'use client'

// Components
import NavigationItem from '@/layouts/aside/menu/sidebar-link'

// Icons
import notificationsBlackSVG from '@/modules/messages/assets/black/notifications-light.svg'
import notificationsWhiteSVG from '@/modules/messages/assets/white/notifications-light.svg'

export default function Notifications() {
  return (
    <NavigationItem
      route='notifications'
      blackIcon={notificationsBlackSVG}
      whiteIcon={notificationsWhiteSVG}
    />
  )
}
