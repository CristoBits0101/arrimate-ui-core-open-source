'use client'

import styles from '@/styles/layouts/sidebar.module.css'
import { usePageComponent } from '@/hooks/usePageComponent'

export default function Sidebar() {
  const activeRoute = usePageComponent()
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>{activeRoute}</li>
        </ul>
      </nav>
    </aside>
  )
}
