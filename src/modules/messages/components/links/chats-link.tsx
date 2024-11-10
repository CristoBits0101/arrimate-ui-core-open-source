import chatBlackSVG from '@/assets/icons/sidebar/black/chats.svg'
import chatWhiteSVG from '@/assets/icons/sidebar/white/chats.svg'
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
