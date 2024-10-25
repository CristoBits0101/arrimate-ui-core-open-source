'use client'

import ArrimateCard from '@/components/marketing/card/arrimate-card'
import PostButton from '@/components/feeds/buttons/post-button'
import Image from 'next/image'
import { useFetchPhotos } from '@/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'

export default function ShowPostImages() {
  /**
   * Loading animation on pause
   * const { photos, loading, error } = useFetchPhotos({
   */
  const { photos } = useFetchPhotos({
    query: 'halloween party',
    orientation: 'portrait',
    per_page: 84,
    page: 4
  })
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error: {error}</p>
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center gap-8'>
      {photos.map((photo) => (
        <article
          key={photo.id}
          className='relative w-[30vw] h-fit flex flex-col items-center justify-center gap-4'
        >
          <header className='w-full h-fit'>
            <ArrimateCard
              nickname={photo.photographer}
              description={photo.photographer_url.replace('https://www.', '')}
              date={randomUtils.getRandomTime()}
              location={randomUtils.getRandomCapital()}
              trending={randomUtils.getRandomBoolean()}
              followers={randomUtils.getRandomFollowers()}
              reliable={randomUtils.getRandomBoolean()}
              verified={randomUtils.getRandomBoolean()}
              follower={true}
            />
          </header>
          <div className='w-full h-[70vh] flex justify-center items-center gap-4'>
            <section className='relative w-full h-full overflow-hidden'>
              <Image
                src={photo.src.large2x}
                alt={photo.alt || 'Image from Pexels'}
                layout='fill'
                objectFit='cover'
                className='rounded-3xl drop-shadow-sm'
              />
            </section>
            <aside className='relative w-fit h-fit flex flex-col gap-2 justify-center items-center'>
              <PostButton iconAlt='' iconDisplay='like' textDisplay='' />
              <PostButton iconAlt='' iconDisplay='comments' textDisplay='' />
              <PostButton iconAlt='' iconDisplay='save' textDisplay='' />
              <PostButton iconAlt='' iconDisplay='share' textDisplay='' />
              <PostButton iconAlt='' iconDisplay='options' textDisplay='' />
            </aside>
          </div>
        </article>
      ))}
    </div>
  )
}
