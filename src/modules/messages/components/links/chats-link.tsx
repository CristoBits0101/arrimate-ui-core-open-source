'use client'

// Components
import NavigationItem from '@/modules/navigation/menu/components/sidebar-link/sidebar-link'

// Icons
import chatBlackSVG from '@/modules/messages/assets/black/chats-light.svg'
import chatWhiteSVG from '@/modules/messages/assets/white/chats-light.svg'

export default function Chats() {
  return (
    <NavigationItem
      route='chats'
      blackIcon={chatBlackSVG}
      whiteIcon={chatWhiteSVG}
    />
  )
}
