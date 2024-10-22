'use client'

import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Pexels library
import { createClient, PhotosWithTotalResults, ErrorResponse } from 'pexels'

export default function ShowPostImages() {
  // Save the results
  const [photos, setPhotos] = useState<PhotosWithTotalResults['photos']>([])

  useEffect(() => {
    // Api key
    const client = createClient(
      'qz2aK1LrJu1CkDlnjMa4cPhukIrwl3Y0YUUhejUvpGvV9zSVTQTgbAT3'
    )

    // Search term
    const query: string = 'momentos'
    const orientation: string = 'portrait'
    const size = 'medium'
    const color = 'white'
    const locale = 'es-ES'
    const page = 2
    const per_page: number = 10

    // Request
    client.photos
      .search({ query, orientation, size, color, locale, page, per_page })
      // Results
      .then((response: PhotosWithTotalResults | ErrorResponse) => {
        if ('photos' in response) setPhotos(response.photos)
        else console.error('Error fetching photos: ', response.error)
      })
      .catch((error) => console.error('Error fetching photos: ', error))
  }, [])

  return (
    <section className='w-full h-fit flex flex-col justify-center items-center'>
      {/* Print the photos */}
      {photos.map((photo, index) => (
        <article
          key={photo.id}
          className='w-[25vw] h-fit flex flex-col items-center'
        >
          <header className='w-full h-fit mb-4'>
            <ArrimateFollowCard
              nickname={photo.photographer}
              description={photo.photographer_url}
              trending={photo.liked}
              followers={photo.id}
            />
          </header>
          <div className='relative w-full h-[75vh] overflow-hidden'>
            <Image
              src={photo.src.large2x}
              alt={photo.alt || 'Image from Pexels'}
              layout='fill'
              objectFit='cover'
              className='rounded-3xl drop-shadow-sm'
            />
          </div>
          {/* Print the photos */}
          {index < photos.length - 1 && (
            <hr className='border-[#bfbdc050] border-solid w-full h-[0.05rem] my-8' />
          )}
        </article>
      ))}
    </section>
  )
}
