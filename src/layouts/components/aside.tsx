'use client'

// hooks
import { usePageComponent } from '@/layouts/hooks/useComponent'

// navigation
import Sidebar from '@/modules/navigation/components/menu/sidebar-menu'

// styles
import styles from '@/layouts/styles/scrollbar.module.css'

// Layout
export default function Aside() {
  const component = usePageComponent()
  return (
    <aside
      className={`dark:bg-[#26272C] hidden md:flex col-span-1 flex-col h-screen p-8 sticky top-0 overflow-y-auto max-w-80 gap-8 ${styles.noScrollbar}`}
    >
      <Sidebar />
      {component}
    </aside>
  )
}
