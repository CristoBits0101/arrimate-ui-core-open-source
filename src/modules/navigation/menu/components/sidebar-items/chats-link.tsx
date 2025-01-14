'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'

// Icons
import chatDarkBlackSVG from '@/assets/icons/navigation/active/dark-theme/messages/chats-dark-icon.svg'
import chatDarkWhiteSVG from '@/assets/icons/navigation/inactive/dark-theme/messages/chats-dark-icon.svg'
import chatLightBlackSVG from '@/assets/icons/navigation/active/light-theme/messages/chats-light-icon.svg'
import chatLightWhiteSVG from '@/assets/icons/navigation/inactive/light-theme/messages/chats-light-icon.svg'

export default function Chats() {
  const { activeTheme } = useThemeContext()

  return (
    <NavigationItem
      route='chats'
      blackIcon={activeTheme === 'light' ? chatLightBlackSVG : chatDarkBlackSVG}
      whiteIcon={activeTheme === 'light' ? chatLightWhiteSVG : chatDarkWhiteSVG}
    />
  )
}
