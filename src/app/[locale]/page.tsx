'use client'

// Components
import ShowPostImages from '@/modules/feeds/components/posts/show-post-images'
import ShowPostStories from '@/modules/feeds/components/posts/show-post-stories'

// Hooks
import { useState, useEffect } from 'react'

// Layouts
import Header from '@/layouts/components/header'
import Aside from '@/layouts/components/aside'

// Styles
import '@/styles/globals.css'

export default function StoriesPage() {
  const [hydrated, setHydrated] = useState<boolean>(false)
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    const root = document.documentElement
    if (theme === 'dark') root.setAttribute('data-mode', 'dark')
    else if (theme === 'light') root.setAttribute('data-mode', 'light')
    else root.setAttribute('data-mode', '')
    setHydrated(true)
  }, [])
  return (
    hydrated && (
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
  )
}
