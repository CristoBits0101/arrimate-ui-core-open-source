'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Icons
import chatBlackSVG from '@/assets/icons/navigation/active/light-theme/messages/chats-light-icon.svg'
import chatWhiteSVG from '@/assets/icons/navigation/active/light-theme/messages/chats-light-icon.svg'

export default function Chats() {
  return (
    <NavigationItem
      route='chats'
      blackIcon={chatBlackSVG}
      whiteIcon={chatWhiteSVG}
    />
  )
}
