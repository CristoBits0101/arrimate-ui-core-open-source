import ArrimateImagesCard from '@/modules/feeds/components/card/arrimate-images-card'
import PostButton from '@/modules/feeds/components/buttons/post-button'
import Image from 'next/image'
import { useFetchPhotos } from '@/modules/feeds/hooks/useFetchPhotos'
import { randomUtils } from '@/utils/randomUtils'

export default function ShowPostImages() {
  // Query images
  const { photos, loading } = useFetchPhotos({
    query: 'couple',
    orientation: 'portrait',
    per_page: 10,
    page: 1
  })

  // Show loading message while fetching photos
  if (loading) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <h2 className='text-center text-gray-500'>{''}</h2>
      </div>
    )
  }

  // Show no photos available message if photos array is empty
  if (!photos || photos.length === 0) {
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <h2 className='text-center text-gray-500'>
          ⚠️ Vaya, no hay fotos disponibles. 😓 Intenta recargar o explorar con
          otro hashtag.
        </h2>
      </div>
    )
  }

  // Render photos if available
  return (
    <div className='w-full h-fit flex flex-col justify-center items-center gap-8'>
      {photos.map((photo) => {
        // Generate a unique description and hashtags for each photo
        const { description, hashtags } =
          randomUtils.getRandomImageDescription()

        return (
          <article
            key={photo.id}
            className='relative min-w-[36rem] max-w-[46rem] w-[36vw] h-fit grid grid-cols-[1fr,auto] grid-rows-[auto,auto,auto] gap-4'
          >
            {/* Card */}
            <header className='col-span-1 row-span-1 w-full h-fit flex flex-col gap-4'>
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
            {/* Empty */}
            <aside className='col-span-1 row-span-1 w-auto h-full flex flex-col'></aside>
            {/* Image */}
            <section className='col-span-1 row-span-1 relative w-full h-[42.5rem] overflow-hidden'>
              <Image
                src={photo.src.large2x}
                alt={photo.alt || 'Image from Pexels'}
                fill
                className='rounded-3xl drop-shadow-sm object-cover'
                style={{ objectFit: 'cover' }}
              />
            </section>
            {/* Buttons */}
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
            {/* Footer with Description and Hashtags */}
            <footer className='col-span-1 row-span-1 w-full h-fit flex flex-col'>
              <p className='w-full break-words'>✍️ {description}</p>
              <p className='w-full break-words text-cyan-800'>
                📸 {hashtags.join(' ')}
              </p>
            </footer>
            {/* Empty */}
            <aside className='col-span-1 row-span-1 w-auto h-full flex flex-col'></aside>
          </article>
        )
      })}
    </div>
  )
}
