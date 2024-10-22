'use client'

import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'
import Image from 'next/image'
import { useEffect, useState } from 'react'

// Pexels library
import { createClient, PhotosWithTotalResults, ErrorResponse } from 'pexels'

export default function ShowPostImages() {
  // Save the results
  const [photos, setPhotos] = useState<PhotosWithTotalResults['photos']>([])

  // Random statistics
  const getRandomBoolean = () => Math.random() < 0.5
  const getRandomFollowers = () =>
    Math.floor(Math.random() * (2000000 - 500 + 1)) + 500

  // Random date
  const getRandomTimeAgo = () => {
    const maxMinutesInMonth = 60 * 24 * 30
    const randomMinutes = Math.floor(Math.random() * (maxMinutesInMonth + 1))
    const minutesInHour = 60
    const minutesInDay = 60 * 24
    const minutesInWeek = minutesInDay * 7
    if (randomMinutes >= minutesInWeek)
      return `${Math.round(randomMinutes / minutesInWeek)} weeks ago`
    else if (randomMinutes >= minutesInDay)
      return `${Math.round(randomMinutes / minutesInDay)} days ago`
    else if (randomMinutes >= minutesInHour)
      return `${Math.round(randomMinutes / minutesInHour)} hours ago`
    else return `${randomMinutes} minutes ago`
  }

  useEffect(() => {
    // Api key
    const client = createClient(
      'qz2aK1LrJu1CkDlnjMa4cPhukIrwl3Y0YUUhejUvpGvV9zSVTQTgbAT3'
    )

    // Search term
    const query = 'momentos'
    const orientation = 'portrait'
    const size = 'medium'
    const color = 'white'
    const locale = 'es-ES'
    const page = 2
    const per_page = 10

    // Request
    client.photos
      .search({ query, orientation, size, color, locale, page, per_page })
      .then((response: PhotosWithTotalResults | ErrorResponse) => {
        if ('photos' in response) setPhotos(response.photos)
        else console.error('Error fetching photos: ', response.error)
      })
      .catch((error) => console.error('Error fetching photos: ', error))
  }, [])

  return (
    <section className='w-full h-fit flex flex-col justify-center items-center gap-16'>
      {/* Print the photos */}
      {photos.map((photo) => (
        <article
          key={photo.id}
          className='w-[25vw] h-fit flex flex-col items-center gap-4'
        >
          <header className='w-full h-fit'>
            <ArrimateFollowCard
              nickname={photo.photographer}
              description={photo.photographer_url.replace('https://www.', '')}
              trending={getRandomBoolean()}
              followers={getRandomFollowers()}
              reliable={getRandomBoolean()}
              verified={getRandomBoolean()}
              date={getRandomTimeAgo()}
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
        </article>
      ))}
    </section>
  )
}
