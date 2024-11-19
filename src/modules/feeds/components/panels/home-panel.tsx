'use client'

import ArrimateFollowCard from '@/modules/marketing/components/card/arrimate-follow-card'
import { useFetchPhotos } from '@/modules/feeds/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'
import React from 'react'

export default function HomePanel({
  emoji = '',
  title = '',
  emojiTwo = '',
  titleTwo = ''
}) {
  const { photos } = useFetchPhotos({
    query: 'personas',
    orientation: 'square',
    page: 1,
    per_page: 10
  })

  if (!photos || photos.length === 0) return null

  const uniquePhotos = photos
    .filter(
      (photo, index, self) => index === self.findIndex((p) => p.id === photo.id)
    )
    .slice(0, 4)

  return (
    <section className='w-full h-fit flex flex-col gap-4 text-sm'>
      {title && (
        <h2 className='font-medium uppercase w-full'>
          {emoji && <span className='text-lg'>{emoji}</span>} {title}
        </h2>
      )}
      <div className='grid grid-cols-2 gap-4'>
        {uniquePhotos.slice(0, 2).map((photo) => (
          <ArrimateFollowCard
            src={photo?.src?.small}
            alt={photo?.alt || 'Image from Pexels'}
            width={photo?.width}
            height={photo?.height}
            key={photo?.id}
            nickname={photo?.photographer}
            profesion={randomUtils.getRandomProfesion()}
            intereses={randomUtils.getRandomIntereses()}
            slogan={randomUtils.getRandomSlogan()}
            trending={randomUtils.getRandomBoolean()}
            followers={randomUtils.getRandomFollowers()}
            reliable={randomUtils.getRandomBoolean()}
            verified={randomUtils.getRandomBoolean()}
            date={randomUtils.getRandomTime()}
            location={randomUtils.getRandomCapital()}
            connection={randomUtils.getRandomBoolean()}
            countryCode={randomUtils.getRandomCountryCode()}
          />
        ))}
      </div>
      {titleTwo && (
        <h2 className='font-medium uppercase w-full mt-4'>
          {emojiTwo && <span className='text-lg'>{emojiTwo}</span>} {titleTwo}
        </h2>
      )}
      <div className='grid grid-cols-2 gap-4'>
        {uniquePhotos.slice(2, 4).map((photo) => (
          <ArrimateFollowCard
            src={photo?.src?.small}
            alt={photo?.alt || 'Image from Pexels'}
            width={photo?.width}
            height={photo?.height}
            key={photo?.id}
            nickname={photo?.photographer}
            profesion={randomUtils.getRandomProfesion()}
            intereses={randomUtils.getRandomIntereses()}
            slogan={randomUtils.getRandomSlogan()}
            trending={randomUtils.getRandomBoolean()}
            followers={randomUtils.getRandomFollowers()}
            reliable={randomUtils.getRandomBoolean()}
            verified={randomUtils.getRandomBoolean()}
            date={randomUtils.getRandomTime()}
            location={randomUtils.getRandomCapital()}
            connection={randomUtils.getRandomBoolean()}
            countryCode={randomUtils.getRandomCountryCode()}
          />
        ))}
      </div>
    </section>
  )
}
