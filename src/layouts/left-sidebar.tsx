'use client'

import Products from '@/components/e-commerce/products'
import Videos from '@/components/streaming/videos'
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
          <Shorts />
          <Videos />
          <Live />
          <Products />
          <Reviews />
        </ul>
      </nav>
    </aside>
  )
}
