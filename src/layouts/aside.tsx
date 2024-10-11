'use client'

import AuthButtons from '@/components/auth/buttons/auth-buttons'
import Sidebar from '@/components/navigation/menu/aside-sidebar'
import { usePageComponent } from '@/hooks/usePageComponent'

export default function Aside() {
  const component = usePageComponent()
  return (
    <aside>
      <AuthButtons />
      <Sidebar />
      {component}
    </aside>
  )
}
