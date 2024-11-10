import chatBlackSVG from '@/modules/messages/assets/icons/links/black/chats.svg'
import chatWhiteSVG from '@/modules/messages/assets/icons/links/white/chats.svg'
import NavigationItem from '@/modules/navigation/components/links/sidebar-link'

export default function Chats() {
  return (
    <NavigationItem
      route='chats'
      blackIcon={chatBlackSVG}
      whiteIcon={chatWhiteSVG}
    />
  )
}
