'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import notificationsDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/messages/notifications-dark-icon.svg'
import notificationsLightBlackSVG from '@/assets/icons/navigation/active/light-theme/messages/notifications-light-icon.svg'
import notificationsDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/messages/notifications-dark-icon.svg'
import notificationsLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/messages/notifications-light-icon.svg'

export default function Notifications() {
  const { activeTheme } = useThemeContext()

  return (
    <NavigationItem
      route='notifications'
      blackIcon={
        activeTheme === 'light'
          ? notificationsLightBlackSVG
          : notificationsDarkBlackSVG
      }
      whiteIcon={
        activeTheme === 'light'
          ? notificationsLightWhiteSVG
          : notificationsDarkWhiteSVG
      }
    />
  )
}
