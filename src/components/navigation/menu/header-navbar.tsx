import Community from '@/components/network/links/community-link'
import Events from '@/components/feeds/links/events-link'
import Home from '@/components/feeds/links/home-link.'
import Live from '@/components/streaming/links/live'
import Products from '@/components/e-commerce/links/products-link'
import Reviews from '@/components/feeds/links/reviews-link.'
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
