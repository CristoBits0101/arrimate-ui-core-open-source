'use client'

import Header from '@/layouts/components/header'
import Aside from '@/layouts/components/aside'
import ShowPostImages from '@/modules/feeds/components/posts/show-post-images'
import ShowPostStories from '@/modules/feeds/components/posts/show-post-stories'
import '@/styles/globals.css'

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main className='hidden md:flex min-w-[46rem] min-h-screen max-h-fit h-auto col-span-1 flex-col items-center gap-16 dark:bg-[#26272C]'>
        <ShowPostStories />
        <ShowPostImages />
      </main>
      <Aside />
      <div className='sm:grid md:hidden place-content-center w-full h-full'>
        <h1 className='w-fit m-auto'>
          🚧 Mobile version coming soon!
          <br />
          🚧 ¡Versión para móviles próximamente!
        </h1>
      </div>
    </>
  )
}
