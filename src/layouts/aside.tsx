'use client'

import Navbar from '@/components/navigation/menu/panel'
import styles from '@/styles/layouts/sidebar.module.css'
import { usePageComponent } from '@/hooks/usePageComponent'

export default function Sidebar() {
  const component = usePageComponent()
  return (
    <aside className={`${styles.sidebar} right-sidebar`}>
      <Navbar />
      <nav>
        <ul>
          <li>{component}</li>
        </ul>
      </nav>
    </aside>
  )
}
