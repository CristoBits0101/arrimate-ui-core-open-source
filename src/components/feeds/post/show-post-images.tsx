'use client'

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
    const query: string = 'young'
    const orientation: string = 'portrait'
    const per_page: number = 10

    // Request
    client.photos
      .search({ query, orientation, per_page })
      // Results
      .then((response: PhotosWithTotalResults | ErrorResponse) => {
        if ('photos' in response) setPhotos(response.photos)
        else console.error('Error fetching photos: ', response.error)
      })
      .catch((error) => console.error('Error fetching photos: ', error))
  }, [])

  return (
    <section className='w-full h-full flex flex-col justify-center items-center gap-8'>
      {/* Print the photos */}
      {photos.map((photo) => (
        <article
          key={photo.id}
          className='relative rounded-3xl w-[25vw] h-[74.47vh] flex flex-col items-center'
        >
          <Image
            className='drop-shadow-sm w-full h-full object-cover aspect-video rounded-3xl'
            src={photo.src.large}
            alt={photo.alt || 'Image from Pexels'}
            layout='fill'
          />
          {/* <div className='p-4 text-center'>
            <p className='font-semibold'>{photo.photographer}</p>
            <a
              href={photo.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500'
            >
              View on Pexels
            </a>
          </div> */}
        </article>
      ))}
    </section>
  )
}
