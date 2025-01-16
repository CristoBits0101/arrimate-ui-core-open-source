'use client'

// Components
import { NextArrow } from '@/modules/publications/show-post/components/buttons/next-arrow'
import { PreviousArrow } from '@/modules/publications/show-post/components/buttons/previous-arrow'

// Hooks
import { useFetchStories } from '@/modules/publications/show-post/hooks/useFetchStories'

// Image
import Image from 'next/image'

// Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/modules/publications/show-post/styles/show-post-stories-swiper.css'

// Swiper
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function ShowPostStories() {
  // Custom hook
  const {
    photos,
    error,
    effectiveSlidesPerView,
    containerRef,
    handleImageError,
    handleClick,
    isImageErrorMap
  } = useFetchStories({
    query: 'face',
    orientation: 'square',
    perPage: 20,
    page: 5
  })

  if (error) return <p>Error: {error}</p>
  if (photos.length === 0) return null

  return (
    <div
      ref={containerRef}
      className='relative w-5/6 flex justify-between items-center'
    >
      {/* Swiper container */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={effectiveSlidesPerView}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        pagination={{ clickable: true }}
        className='relative w-full flex justify-between items-center'
      >
        {photos.map(
          (photo) =>
            photo &&
            photo.src &&
            !isImageErrorMap[photo.id] && (
              // Swiper element
              <SwiperSlide key={photo.id} className='relative w-fit h-fit'>
                {/* Swiper image */}
                <div className='w-20 h-20 overflow-hidden flex items-center justify-center rounded-full m-auto'>
                  <Image
                    src={photo.src.small}
                    alt={photo.alt || 'Image from Pexels'}
                    width={photo.width}
                    height={photo.height}
                    priority={true}
                    className='rounded-full drop-shadow-sm object-cover hover:cursor-pointer'
                    onError={() => handleImageError(photo.id)}
                  />
                </div>
                {/* Swiper text */}
                <p className='w-11/12 mt-2 m-auto text-center text-sm truncate text-[#453C41] dark:text-[#b8b8bb]'>
                  {photo.photographer}
                </p>
              </SwiperSlide>
            )
        )}
        {/* Custom arrows */}
        <PreviousArrow onClick={handleClick} />
        <NextArrow onClick={handleClick} />
      </Swiper>
    </div>
  )
}
