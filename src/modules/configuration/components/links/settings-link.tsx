// Auth: Contain user information
import { auth } from '@/modules/auth/lib/auth'

// User: Default image
import dafaultUserImage from '@/modules/auth/assets/images/default_user_image.png'

// Client Component
import SidebarItem from '@/modules/navigation/components/links/sidebar-link'

const SettingsLink = async () => {
  const session = await auth() // Fetch session data on the server
  console.log(JSON.stringify(session))

  return (
    <SidebarItem
      route='settings'
      blackIcon={dafaultUserImage.src}
      whiteIcon={dafaultUserImage.src}
    />
  )
}

export default SettingsLink
