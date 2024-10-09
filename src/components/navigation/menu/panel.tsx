import Cart from '@/components/e-commerce/cart'
import Messages from '@/components/messages/chats'
import Notifications from '@/components/messages/notifications'
import Post from '@/components/feeds/post'
import SignIn from '@/components/auth/links/sign-in-link'

export default function Panel() {
  return (
    <nav>
      <ul>
        <Post />
        <Messages />
        <Notifications />
        <SignIn />
        <Cart />
      </ul>
    </nav>
  )
}
