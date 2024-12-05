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
      className={`dark:bg-[#26272C] hidden md:flex col-span-1 flex-col gap-8 min-h-screen max-h-fit h-auto p-8 sticky top-0 overflow-y-auto ${styles.noScrollbar}`}
    >
      <Sidebar />
      {component}
    </aside>
  )
}
