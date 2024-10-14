'use client'

import StoriesCarousel from '@/components/feeds/carousels/stories-carousel'
import Header from '@/layouts/header'
import Aside from '@/layouts/aside'
import '@/styles/globals.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='col-span-1'>
        <StoriesCarousel />
      </main>
      <Aside />
    </>
  )
}
