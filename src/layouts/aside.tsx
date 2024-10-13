'use client'

import AuthButtons from '@/components/auth/buttons/auth-buttons'
import Sidebar from '@/components/navigation/menu/aside-sidebar'
import { usePageComponent } from '@/hooks/useComponent'

export default function Aside() {
  const component = usePageComponent()
  return (
    <aside className='dark:bg-[#1E1F22]'>
      <AuthButtons />
      <Sidebar />
      {component}
    </aside>
  )
}
