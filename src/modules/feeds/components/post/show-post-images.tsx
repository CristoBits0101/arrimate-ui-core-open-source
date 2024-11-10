'use client'

import ArrimateImagesCard from '@/modules/feeds/components/card/arrimate-images-card'
import PostButton from '@/modules/feeds/components/buttons/post-button'
import Image from 'next/image'
import { useFetchPhotos } from '@/modules/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'
import { useState } from 'react'

export default function ShowPostImages() {
  const [hashtag] = useState(() => randomUtils.getRandomHashtag())
  const [page] = useState(() => randomUtils.getRandomPage())

  // Query images
  const { photos } = useFetchPhotos({
    query: hashtag,
    orientation: 'portrait',
    per_page: 10,
    page: page
  })

  return (
    <div className='w-full h-fit flex flex-col justify-center items-center gap-8'>
      {photos.map((photo) => (
        <article
          key={photo.id}
          className='relative min-w-[36rem] max-w-[46rem] w-[30vw] h-fit grid grid-cols-[1fr,auto] grid-rows-[auto,auto] gap-4'
        >
          <header className='col-span-1 row-span-1 w-full h-fit flex gap-4'>
            <ArrimateImagesCard
              nickname={photo.photographer}
              profesion={randomUtils.getRandomProfesion()}
              intereses={randomUtils.getRandomIntereses()}
              slogan={randomUtils.getRandomSlogan()}
              date={randomUtils.getRandomTime()}
              location={randomUtils.getRandomCapital()}
              trending={randomUtils.getRandomBoolean()}
              followers={randomUtils.getRandomFollowers()}
              reliable={randomUtils.getRandomBoolean()}
              verified={randomUtils.getRandomBoolean()}
              follower={true}
            />
          </header>
          <aside className='col-span-1 row-span-1 w-auto h-full flex flex-col'></aside>
          <footer className='col-span-1 row-span-1 relative w-full m-h-[42.703rem] h-[75vh] 2xl:h-[90vh] overflow-hidden'>
            <Image
              src={photo.src.large2x}
              alt={photo.alt || 'Image from Pexels'}
              fill
              className='rounded-2xl 2xl:rounded-3xl drop-shadow-sm object-cover'
              style={{ objectFit: 'cover' }}
            />
          </footer>
          <aside className='col-span-1 row-span-1 w-full h-full flex flex-col gap-2 justify-center items-center'>
            <PostButton
              iconAlt=''
              iconDisplay='like'
              textDisplay={randomUtils.getRandomLikes().toString()}
            />
            <PostButton
              iconAlt=''
              iconDisplay='comments'
              textDisplay={randomUtils.getRandomInteractions().toString()}
            />
            <PostButton
              iconAlt=''
              iconDisplay='save'
              textDisplay={randomUtils.getRandomInteractions().toString()}
            />
            <PostButton
              iconAlt=''
              iconDisplay='share'
              textDisplay={randomUtils.getRandomInteractions().toString()}
            />
            <PostButton iconAlt='' iconDisplay='options' />
          </aside>
        </article>
      ))}
    </div>
  )
}
