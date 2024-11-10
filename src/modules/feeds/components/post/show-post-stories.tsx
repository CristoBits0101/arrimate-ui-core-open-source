'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useFetchPhotos } from '@/modules/feeds/hooks/useFetchPhotos'
import unknownImage from '@/modules/feeds/assets/images/profile/aspect-ratio-1-1/unknownImage.jpg'

export default function ShowPostStories() {
  const { photos, loading, error } = useFetchPhotos({
    query: 'personas',
    orientation: 'square',
    per_page: 84,
    page: 4
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <div className='relative w-20 h-20 flex flex-col text-center gap-2'>
            <span
              className='relative w-20 h-20 flex items-center justify-center bg-cover bg-center bg-no-repeat aspect-square rounded-full shadow-sm'
              style={{
                backgroundColor: photo.avg_color || '#f0f0f0',
                backgroundImage: `url(${photo.src.small || unknownImage})`
              }}
            ></span>
            <h3 className='w-20 text-sm'>
              {photo.photographer.length > 8
                ? photo.photographer.slice(0, 7) + '...'
                : photo.photographer}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
