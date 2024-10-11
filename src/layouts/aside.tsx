'use client'

import AuthButtons from '@/components/auth/buttons/auth-buttons'
import AsideSidebar from '@/components/navigation/menu/aside-sidebar'
import { usePageComponent } from '@/hooks/usePageComponent'

export default function Sidebar() {
  const component = usePageComponent()
  return (
    <aside>
      <AuthButtons />
      <AsideSidebar />
      <nav>
        <ul>
          <li>{component}</li>
        </ul>
      </nav>
    </aside>
  )
}
