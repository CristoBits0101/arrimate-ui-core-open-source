import Community from '@/components/network/links/community-link'
import Events from '@/components/feeds/links/events-link'
import Home from '@/components/feeds/links/home-link.'
import Live from '@/components/streaming/links/live'
import Products from '@/components/e-commerce/links/products-link'
import Reviews from '@/components/feeds/links/reviews-link.'
import Shorts from '@/components/streaming/links/shorts'
import Videos from '@/components/streaming/links/videos'

export default function Pages() {
  return (
    <nav className='flex h-full justify-center w-full mt-6'>
      <ul className='flex flex-col h-fit w-fit gap-2'>
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
