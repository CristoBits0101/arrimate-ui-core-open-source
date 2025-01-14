// E-commerce
import Products from '@/modules/navigation/menu/components/navbar-items/products-link'

// Feeds
import Events from '@/modules/navigation/menu/components/navbar-items/events-link'
import Reviews from '@/modules/navigation/menu/components/navbar-items/reviews-link'
import Stories from '@/modules/navigation/menu/components/navbar-items/stories-link'

// Network
import Community from '@/modules/navigation/menu/components/navbar-items/community-link'

// Streaming
import Audios from '@/modules/navigation/menu/components/navbar-items/audios-link'
import Live from '@/modules/navigation/menu/components/navbar-items/live-link'
import Shorts from '@/modules/navigation/menu/components/navbar-items/shorts-link'
import Videos from '@/modules/navigation/menu/components/navbar-items/videos-link'

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
