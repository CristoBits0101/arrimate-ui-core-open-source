'use client'

import Products from '@/components/e-commerce/products'
import Channels from '@/components/feeds/channels'
import Explore from '@/components/feeds/explore'
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
          <Channels />
          <Shorts />
          <Live />
          <Products />
          <Reviews />
        </ul>
      </nav>
    </aside>
  )
}
