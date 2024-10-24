'use client'

import Header from '@/layouts/header'
import Aside from '@/layouts/aside'
import ShowPostImages from '@/components/feeds/post/show-post-images'
import ShowPostStories from '@/components/feeds/post/show-post-stories'
import '@/styles/globals.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='min-w-52 col-span-1 flex flex-col items-center'>
        <ShowPostStories />
        <ShowPostImages />
      </main>
      <Aside />
    </>
  )
}
