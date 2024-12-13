'use client'

// layouts
import Header from '@/layouts/components/header'
import Aside from '@/layouts/components/aside'

// posts
import ShowPostImages from '@/modules/feeds/components/posts/show-post-images'
import ShowPostStories from '@/modules/feeds/components/posts/show-post-stories'

// styles
import '@/styles/globals.css'

export default function StoriesPage() {
  return (
    <>
      {/* Header layout */}
      <Header />
      {/* Stories page content */}
      <main className='hidden md:flex min-w-[46rem] h-fit col-span-1 flex-col items-center gap-16 dark:bg-[#26272C]'>
        <ShowPostStories />
        <ShowPostImages />
      </main>
      {/* Aside layout */}
      <Aside />
      {/* Mobile view message */}
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
