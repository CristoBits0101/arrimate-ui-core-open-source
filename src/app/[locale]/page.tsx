'use client'

import Header from '@/layouts/components/header'
import Aside from '@/layouts/components/aside'
import ShowPostImages from '@/modules/feeds/components/post/show-post-images'
import ShowPostStories from '@/modules/feeds/components/post/show-post-stories'
import '@/styles/globals.css'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className='min-w-[46rem] col-span-1 flex flex-col items-center gap-8'>
        <ShowPostStories />
        <ShowPostImages />
      </main>
      <Aside />
    </>
  )
}
