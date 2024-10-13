import Cart from '@/components/e-commerce/links/cart-link'
import Messages from '@/components/messages/links/chats-link.'
import Notifications from '@/components/messages/links/notifications-link.'
import Post from '@/components/feeds/links/post-link.'
import Settings from '@/components/configuration/links/settings'

export default function Panel() {
  return (
    <nav className='flex w-full items-center h-fit'>
      <ul className='flex items-center flex-row justify-between w-full h-11'>
        <Post />
        <Messages />
        <Notifications />
        <Cart />
        <Settings />
      </ul>
    </nav>
  )
}
