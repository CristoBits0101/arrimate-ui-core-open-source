'use client'

import Panel from '@/components/navigation/menu/events-panel'
import { usePageComponent } from '@/hooks/usePageComponent'

export default function Sidebar() {
  const component = usePageComponent()
  return (
    <aside className='bg-slate-500'>
      <Panel />
      <nav>
        <ul>
          <li>{component}</li>
        </ul>
      </nav>
    </aside>
  )
}
