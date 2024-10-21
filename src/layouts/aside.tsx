'use client'

import AuthButtons from '@/components/auth/buttons/redirect/redirect-auth-buttons'
import Sidebar from '@/components/navigation/menu/sidebar-menu'
import { usePageComponent } from '@/hooks/useComponent'

export default function Aside() {
  const component = usePageComponent()
  return (
    <aside className='aside col-span-1'>
      <AuthButtons />
      <Sidebar />
      {component}
    </aside>
  )
}
