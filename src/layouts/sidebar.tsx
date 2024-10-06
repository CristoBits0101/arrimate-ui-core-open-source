'use client'

import Merch from '@/components/e-commerce/merch'
import Explore from '@/components/feeds/channels'
import Home from '@/components/feeds/home'
import Reviews from '@/components/feeds/reviews'
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
          <Merch />
          <Reviews />
        </ul>
      </nav>
    </aside>
  )
}
