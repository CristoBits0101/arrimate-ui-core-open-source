'use client'

// Components
import ShowPostImages from '@/modules/publications/show-post/components/posts/show-post-images'
import ShowPostStories from '@/modules/publications/show-post/components/posts/show-post-stories'

// Styles
import '@/styles/globals.css'

export default function StoriesPage() {
  return (
    <>
        <ShowPostStories />
        <ShowPostImages />
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
