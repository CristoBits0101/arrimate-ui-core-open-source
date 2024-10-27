import ArrimateFollowCard from '@/components/marketing/card/arrimate-follow-card'
import { useFetchPhotos } from '@/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'

export default function HomePanel() {
  /**
   * Loading animation on pause
   * const { photos, loading, error } = useFetchPhotos({
   */
  const { photos } = useFetchPhotos({
    query: 'personas',
    orientation: 'square',
    page: Math.floor(Math.random() * 10) + 1,
    per_page: 10
  })

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error: {error}</p>

  const uniquePhotos = photos
    .filter(
      (photo, index, self) => index === self.findIndex((p) => p.id === photo.id)
    )
    .slice(0, 4)

  return (
    <section className='w-full h-full flex flex-col gap-4 overflow-hidden overflow-y-auto no-scrollbar'>
      <h2 className='font-medium uppercase w-full text-center'>
        Top Content Creators
      </h2>
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
          />
        ))}
      </div>
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
          />
        ))}
      </div>
    </section>
  )
}
