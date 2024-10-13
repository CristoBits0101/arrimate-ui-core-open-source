import Settings from '@/components/configuration/links/settings'
import Cart from '@/components/e-commerce/links/cart-link'
import Post from '@/components/feeds/links/post-link'
import Chats from '@/components/messages/links/chats-link'
import Notifications from '@/components/messages/links/notifications-link'

export default function SidebarMenu() {
  return (
    <nav className='flex w-full items-center justify-center h-fit'>
      <ul className='flex items-center justify-between w-full h-11'>
        <Post />
        <Chats />
        <Notifications />
        <Cart />
        <Settings />
      </ul>
    </nav>
  )
}
