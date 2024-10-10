import Cart from '@/components/e-commerce/cart'
import Messages from '@/components/messages/chats'
import Notifications from '@/components/messages/notifications'
import Post from '@/components/feeds/post'

export default function Panel() {
  return (
    <nav className='bg-slate-300'>
      <ul className='flex flex-row'>
        <Post />
        <Messages />
        <Notifications />
        <Cart />
      </ul>
    </nav>
  )
}
