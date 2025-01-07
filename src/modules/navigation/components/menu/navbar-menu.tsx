// E-commerce
import Products from '@/modules/e-commerce/components/links/products-link'

// Feeds
import Events from '@/modules/feeds/components/links/events-link'
import Reviews from '@/modules/feeds/components/links/reviews-link'
import Stories from '@/modules/feeds/components/links/stories-link'

// Network
import Community from '@/modules/network/components/links/community-link'

// Streaming
import Audios from '@/modules/streaming/components/links/audios-link'
import Live from '@/modules/streaming/components/links/live-link'
import Shorts from '@/modules/streaming/components/links/shorts-link'
import Videos from '@/modules/streaming/components/links/videos-link'

export default function NavbarMenu() {
  return (
    <nav className='flex h-full justify-center w-full mt-6'>
      <ul className='flex flex-col w-full h-full gap-2'>
        <Stories />
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
