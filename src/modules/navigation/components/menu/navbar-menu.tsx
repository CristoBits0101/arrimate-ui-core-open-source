import Community from '@/modules/network/components/links/community-link'
import Events from '@/modules/feeds/components/links/events-link'
import Home from '@/modules/feeds/components/links/home-link'
import Live from '@/modules/streaming/components/links/live-link'
import Products from '@/modules/e-commerce/components/links/products-link'
import Reviews from '@/modules/feeds/components/links/reviews-link'
import Audios from '@/modules/streaming/components/links/audios-link'
import Shorts from '@/modules/streaming/components/links/shorts-link'
import Videos from '@/modules/streaming/components/links/videos-link'

export default function NavbarMenu() {
  return (
    <nav className='flex h-full justify-center w-full mt-6'>
      <ul className='flex flex-col w-full h-full gap-2'>
        <Home />
        <Events />
        <Products />
        <Shorts />
        <Videos />
        <Live />
        <Audios />
        <Reviews />
        <Community />
      </ul>
    </nav>
  )
}
