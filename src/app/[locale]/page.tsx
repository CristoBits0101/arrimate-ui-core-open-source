'use client'

import CarouselHome from '@/components/feeds/carousels/carousel-home'
import Header from '@/layouts/header'
import Aside from '@/layouts/aside'
import '@/styles/globals.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='col-span-1'>
        <CarouselHome />
      </main>
      <Aside />
    </>
  )
}
