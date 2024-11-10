import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useFetchPhotos } from '@/modules/feeds/hooks/useFetchPhotos'
import { useState, useEffect, useRef, useCallback } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ShowPostStories() {
  const { photos, loading, error } = useFetchPhotos({
    query: 'personas',
    orientation: 'square',
    per_page: 30,
    page: 4
  })

  const [slidesPerView, setSlidesPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)

  const updateSlidesPerView = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const newSlidesPerView = Math.floor(containerWidth / 96)
      setSlidesPerView(newSlidesPerView)
    }
  }, [])

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [updateSlidesPerView])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  // Create a set of unique photos based on the src
  const uniquePhotos = Array.from(
    new Set(photos.map((photo) => photo.src?.small))
  ).map((src) => photos.find((photo) => photo.src?.small === src))

  // Ensure slidesPerView does not exceed the number of available photos
  const effectiveSlidesPerView = Math.min(slidesPerView, uniquePhotos.length)

  return (
    <div
      ref={containerRef}
      className='relative w-full flex justify-between items-center'
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={effectiveSlidesPerView}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='relative w-full flex justify-between items-center'
      >
        {uniquePhotos.map(
          (photo) =>
            photo &&
            photo.src && (
              <SwiperSlide key={photo.id}>
                <div className='w-20 h-20 overflow-hidden flex items-center justify-center rounded-full'>
                  <Image
                    src={photo.src.small}
                    alt={photo.alt || 'Image from Pexels'}
                    width={photo.width}
                    height={photo.height}
                    layout='responsive'
                    objectFit='cover'
                    className='rounded-full drop-shadow-sm border-solid border-[0.05rem] border-[#bfbdc050]'
                  />
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  )
}
