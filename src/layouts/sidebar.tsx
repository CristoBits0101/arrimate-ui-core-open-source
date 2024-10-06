'use client'

import Explore from '@/components/feeds/explore'
import Home from '@/components/feeds/home'
import Live from '@/components/streaming/live'
import Shorts from '@/components/streaming/shorts'
import styles from '@/styles/layouts/sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <Home />
          <Explore />
          <Shorts />
          <Live />
        </ul>
      </nav>
    </aside>
  )
}
