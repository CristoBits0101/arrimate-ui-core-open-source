'use client'

// Components
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

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
