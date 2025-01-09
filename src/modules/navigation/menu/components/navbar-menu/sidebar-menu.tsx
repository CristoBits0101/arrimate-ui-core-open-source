import Cart from '@/modules/navigation/menu/components/sidebar-items/cart-link'
import Chats from '@/modules/navigation/menu/components/sidebar-items/chats-link'
import Notifications from '@/modules/navigation/menu/components/sidebar-items/notifications-link'
import Post from '@/modules/feeds/components/links/post-link'
import Settings from '@/modules/configuration/profile-update/components/links/profile-link'

export default function SidebarMenu() {
  // Store the components in an array
  const components = [
    <Post key='post' />,
    <Cart key='cart' />,
    <Notifications key='notifications' />,
    <Chats key='chats' />,
    <Settings key='settings' />
  ]

  // Check if all components return a truthy value
  const shouldRenderMenu = components.every((component) => component)

  // Conditionally render the menu
  if (!shouldRenderMenu) return null

  return (
    <nav className='flex w-full items-center justify-center h-fit'>
      <ul className='flex items-center justify-between w-full h-fit'>
        {components.map((component) => component)}
      </ul>
    </nav>
  )
}
