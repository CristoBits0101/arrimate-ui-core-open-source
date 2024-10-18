'use client'

import Header from '@/layouts/header'
import Aside from '@/layouts/aside'
import HomeCarousel from '@/components/feeds/carousels/home-carousel'
import '@/styles/globals.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='min-w-52 col-span-1 flex flex-col items-center'>
        <HomeCarousel />
      </main>
      <Aside />
    </>
  )
}
