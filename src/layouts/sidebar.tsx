'use client'

import Discover from '@/components/feeds/discover'
import Live from '@/components/streaming/live'
import Shorts from '@/components/streaming/shorts'
import styles from '@/styles/layouts/sidebar.module.css'
import Trending from '@/components/feeds/trending'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <Trending />
          <Discover />
          <Shorts />
          <Live />
        </ul>
      </nav>
    </aside>
  )
}
