import Cart from '@/components/e-commerce/cart'
import Messages from '@/components/messages/chats'
import Notifications from '@/components/messages/notifications'
import Post from '@/components/feeds/post'
import Settings from '@/components/configuration/settings'
import styles from '@/styles/layouts/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <ul>
        <Post />
        <Messages />
        <Notifications />
        <Settings />
        <Cart />
      </ul>
    </nav>
  )
}
