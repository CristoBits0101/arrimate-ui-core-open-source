import chatBlackSVG from '@/assets/icons/navbar/black/chats.svg'
import chatWhiteSVG from '@/assets/icons/navbar/white/chats.svg'
import NavigationItem from '@/components/navigation/menu/item'

export default function Chats() {
  return (
    <NavigationItem
      route='chats'
      blackIcon={chatBlackSVG}
      whiteIcon={chatWhiteSVG}
    />
  )
}
