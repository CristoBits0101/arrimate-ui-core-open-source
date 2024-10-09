import Community from '@/components/network/community'
import Events from '@/components/feeds/events'
import Home from '@/components/feeds/home'
import Live from '@/components/streaming/live'
import Products from '@/components/e-commerce/products'
import Reviews from '@/components/feeds/reviews'
import Shorts from '@/components/streaming/shorts'
import Videos from '@/components/streaming/videos'
import styles from '@/styles/components/menu.module.css'

export default function Pages() {
  return (
    <nav className={styles.menu}>
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
