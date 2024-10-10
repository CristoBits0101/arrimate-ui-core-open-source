'use client'

import AuthButtons from '@/components/auth/buttons/auth-buttons'
import Panel from '@/components/navigation/menu/aside-sidebar'
import { usePageComponent } from '@/hooks/usePageComponent'

export default function Sidebar() {
  const component = usePageComponent()
  return (
    <aside className='bg-slate-500'>
      <Panel />
      <AuthButtons />
      <nav>
        <ul>
          <li>{component}</li>
        </ul>
      </nav>
    </aside>
  )
}
