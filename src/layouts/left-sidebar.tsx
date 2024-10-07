'use client'

import Products from '@/components/e-commerce/products'
import Videos from '@/components/streaming/videos'
import Events from '@/components/feeds/events'
import Home from '@/components/feeds/home'
import Reviews from '@/components/feeds/reviews'
import Live from '@/components/streaming/live'
import Shorts from '@/components/streaming/shorts'
import styles from '@/styles/layouts/sidebar.module.css'
import Following from '@/components/network/following'

export default function Sidebar() {
  return (
    <aside className={`${styles.sidebar} left-sidebar`}>
      <nav>
        <ul>
          <Home />
          <Events />
          <Shorts />
          <Videos />
          <Live />
          <Products />
          <Reviews />
          <Following />
        </ul>
      </nav>
    </aside>
  )
}
