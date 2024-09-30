import Cart from '@/components/e-commerce/cart'
import Messages from '@/components/messages/chats'
import Notifications from '@/components/messages/notifications'
import Post from '@/components/feeds/post'
import SignIn from '@/components/auth/sign-in-link'
import styles from '@/styles/layouts/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
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
