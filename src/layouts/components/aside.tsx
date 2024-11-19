'use client'

import UserCard from '@/modules/auth/components/cards/user-card'
import Sidebar from '@/modules/navigation/components/menu/sidebar-menu'
import { usePageComponent } from '@/layouts/hooks/useComponent'

export default function Aside() {
  const component = usePageComponent()
  return (
    <aside className='hidden md:flex col-span-1 flex-col gap-8 h-screen p-8 sticky top-0'>
      <UserCard />
      <Sidebar />
      {component}
    </aside>
  )
}
