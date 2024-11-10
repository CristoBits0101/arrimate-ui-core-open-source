'use client'

import AuthButtons from '@/modules/auth/components/buttons/redirect/redirect-auth-buttons'
import Sidebar from '@/modules/navigation/components/menu/sidebar-menu'
import { usePageComponent } from '@/modules/hooks/useComponent'

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
