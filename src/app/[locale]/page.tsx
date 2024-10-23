'use client'

import Header from '@/layouts/header'
import Aside from '@/layouts/aside'
import ShowImages from '@/components/feeds/post/show-post-images'
import '@/styles/globals.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='min-w-52 col-span-1 flex flex-col items-center'>
        <ShowImages />
      </main>
      <Aside />
    </>
  )
}
