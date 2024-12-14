import Cart from '@/modules/e-commerce/components/links/cart-link'
import Chats from '@/modules/messages/components/links/chats-link'
import Notifications from '@/modules/messages/components/links/notifications-link'
import Post from '@/modules/feeds/components/links/post-link'
import Settings from '@/modules/configuration/components/links/settings-link'

export default function SidebarMenu() {
  return (
    <nav className='flex w-full items-center justify-center h-fit'>
      <ul className='flex items-center justify-between w-full h-fit'>
        <Post />
        <Cart />
        <Notifications />
        <Chats />
        <Settings />
      </ul>
    </nav>
  )
}
