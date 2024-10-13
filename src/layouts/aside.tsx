'use client'

import AuthButtons from '@/components/auth/buttons/auth-buttons'
import Sidebar from '@/components/navigation/menu/aside-sidebar'
import { usePageComponent } from '@/hooks/useComponent'

export default function Aside() {
  const component = usePageComponent()
  return (
    <aside className='col-span-1'>
      <AuthButtons />
      <Sidebar />
      {component}
    </aside>
  )
}
