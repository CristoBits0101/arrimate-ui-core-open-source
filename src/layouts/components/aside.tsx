'use client'

import Sidebar from '@/modules/navigation/components/menu/sidebar-menu'
import styles from '@/layouts/styles/scrollbar.module.css'
import { usePageComponent } from '@/layouts/hooks/useComponent'

export default function Aside() {
  const component = usePageComponent()
  return (
    <aside
      className={`hidden md:flex col-span-1 flex-col gap-8 h-screen p-8 sticky top-0 overflow-y-auto ${styles.noScrollbar}`}
    >
      <Sidebar />
      {component}
    </aside>
  )
}
