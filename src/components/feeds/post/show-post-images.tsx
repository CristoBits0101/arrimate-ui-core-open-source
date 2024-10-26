'use client'

import ArrimateImagesCard from '@/components/marketing/card/arrimate-images-card'
import PostButton from '@/components/feeds/buttons/post-button'
import Image from 'next/image'
import { useFetchPhotos } from '@/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'

export default function ShowPostImages() {
  const { photos } = useFetchPhotos({
    query: 'halloween party',
    orientation: 'portrait',
    per_page: 84,
    page: randomUtils.getRandomPage()
  })

  return (
    <div className='w-full h-fit flex flex-col justify-center items-center gap-8'>
      {photos.map((photo) => (
        <article
          key={photo.id}
          className='relative min-w-[36rem] max-w-[46rem] w-[30vw] h-fit grid grid-cols-[1fr,auto] grid-rows-[auto,auto] gap-4'
        >
          <header className='col-span-1 row-span-1 w-full h-fit flex gap-4'>
            <section className='w-4/5 h-full'>
              <ArrimateImagesCard
                nickname={photo.photographer}
                description={photo.photographer_url
                  .replace('https://www.', '')
                  .replace('es-es/', '')}
                trending={randomUtils.getRandomBoolean()}
                followers={randomUtils.getRandomFollowers()}
                reliable={randomUtils.getRandomBoolean()}
                verified={randomUtils.getRandomBoolean()}
                follower={true}
              />
            </section>
          </header>
          <aside className='col-span-1 row-span-1 w-auto h-full flex flex-col'></aside>
          <footer className='col-span-1 row-span-1 relative w-full m-h-[42.703rem] h-[75vh] overflow-hidden'>
            <Image
              src={photo.src.large2x}
              alt={photo.alt || 'Image from Pexels'}
              layout='fill'
              objectFit='cover'
              className='rounded-2xl drop-shadow-sm'
            />
          </footer>
          <aside className='col-span-1 row-span-1 w-full h-full flex flex-col gap-2 justify-center items-center'>
            <PostButton iconAlt='' iconDisplay='like' textDisplay='' />
            <PostButton iconAlt='' iconDisplay='comments' textDisplay='' />
            <PostButton iconAlt='' iconDisplay='save' textDisplay='' />
            <PostButton iconAlt='' iconDisplay='share' textDisplay='' />
            <PostButton iconAlt='' iconDisplay='options' textDisplay='' />
          </aside>
        </article>
      ))}
    </div>
  )
}
