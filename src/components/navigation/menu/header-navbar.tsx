import Community from '@/components/network/community'
import Events from '@/components/feeds/links/events'
import Home from '@/components/feeds/links/home'
import Live from '@/components/streaming/links/live'
import Products from '@/components/e-commerce/links/products'
import Reviews from '@/components/feeds/links/reviews'
import Shorts from '@/components/streaming/links/shorts'
import Videos from '@/components/streaming/links/videos'
import styles from '@/styles/components/header-navbar.module.css'

export default function Pages() {
  return (
    <nav className={`${styles.navbar} mt-6`}>
      <ul>
        <Home />
        <Events />
        <Products />
        <Shorts />
        <Videos />
        <Live />
        <Reviews />
        <Community />
      </ul>
    </nav>
  )
}
