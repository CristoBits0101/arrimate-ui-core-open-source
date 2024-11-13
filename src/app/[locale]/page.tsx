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
      <main className='hidden md:flex min-w-[46rem] col-span-1 flex-col items-center gap-16'>
        <ShowPostStories />
        <ShowPostImages />
      </main>
      <Aside />
      <div className='sm:grid md:hidden place-content-center w-full h-full'>
        <h1>
          🚧 Mobile version coming soon!
          <br />
          🚧 ¡Versión para móviles próximamente!
        </h1>
      </div>
    </>
  )
}
