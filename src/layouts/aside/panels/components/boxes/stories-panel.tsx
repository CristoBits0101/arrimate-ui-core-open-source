'use client'

// Components
import ArrimateFollowCard from '@/layouts/aside/panels/components/cards/arrimate-follow-card'

// Custom
import { useFetchPhotos } from '@/modules/publications/show-post/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'

export default function HomePanel({
  emoji = '',
  title = '',
  emojiTwo = '',
  titleTwo = ''
}) {
  // Query images
  const { photos } = useFetchPhotos({
    query: 'personas',
    orientation: 'square',
    page: 1,
    per_page: 10
  })

  // Loading hidden content
  if (!photos || photos.length === 0) return null

  // Filter and slice unique photos
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
            key={photo?.id}
            nickname={photo?.photographer}
            profesion={randomUtils.getRandomProfession()}
            intereses={randomUtils.getRandomInterests()}
            slogan={randomUtils.getRandomSlogan()}
            trending={randomUtils.getRandomBoolean()}
            followers={randomUtils.getRandomFollowers()}
            reliable={randomUtils.getRandomBoolean()}
            verified={randomUtils.getRandomBoolean()}
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
            key={photo?.id}
            nickname={photo?.photographer}
            profesion={randomUtils.getRandomProfession()}
            intereses={randomUtils.getRandomInterests()}
            slogan={randomUtils.getRandomSlogan()}
            trending={randomUtils.getRandomBoolean()}
            followers={randomUtils.getRandomFollowers()}
            reliable={randomUtils.getRandomBoolean()}
            verified={randomUtils.getRandomBoolean()}
            connection={randomUtils.getRandomBoolean()}
            countryCode={randomUtils.getRandomCountryCode()}
          />
        ))}
      </div>
    </section>
  )
}
