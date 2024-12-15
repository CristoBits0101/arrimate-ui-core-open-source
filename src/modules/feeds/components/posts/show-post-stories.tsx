import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useFetchPhotos } from '@/modules/feeds/hooks/posts/useFetchPhotos'
import { useState, useEffect, useRef, useCallback } from 'react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/modules/feeds/styles/show-post-stories-swiper.css'

type Photo = {
  id: number
  src: {
    small: string
    medium?: string
    large?: string
  }
  alt?: string | null
  width: number
  height: number
  photographer: string
}

export default function ShowPostStories() {
  const { photos, error } = useFetchPhotos({
    query: 'person',
    orientation: 'square',
    per_page: 20,
    page: 1
  })

  const [slidesPerView, setSlidesPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isImageErrorMap, setIsImageErrorMap] = useState<{
    [key: number]: boolean
  }>({})

  // Function to update slidesPerView based on container width
  const updateSlidesPerView = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const newSlidesPerView = Math.max(1, Math.floor(containerWidth / 96))
      setSlidesPerView(newSlidesPerView)
    }
  }, [])

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [updateSlidesPerView])

  useEffect(() => {
    if (photos.length > 0) updateSlidesPerView()
  }, [photos, updateSlidesPerView])

  if (error) return <p>Error: {error}</p>
  if (photos.length === 0) return null

  const uniquePhotos: Photo[] = Array.from(
    new Set(photos.map((photo: Photo) => photo.src?.small))
  ).map(
    (src) => photos.find((photo: Photo) => photo.src?.small === src) as Photo
  )

  const effectiveSlidesPerView = Math.min(slidesPerView, uniquePhotos.length)

  // Function to handle image loading error
  const handleImageError = (photoId: number) => {
    setIsImageErrorMap((prev) => ({ ...prev, [photoId]: true }))
  }

  return (
    <div
      ref={containerRef}
      className='relative w-3/4 flex justify-between items-center'
    >
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={effectiveSlidesPerView}
        navigation
        pagination={{ clickable: true }}
        className='relative w-full flex justify-between items-center'
      >
        {uniquePhotos.map((photo) =>
          photo && photo.src && !isImageErrorMap[photo.id] ? (
            <SwiperSlide key={photo.id} className='relative'>
              <div className='w-20 h-20 overflow-hidden flex items-center justify-center rounded-full'>
                <Image
                  src={photo.src.small}
                  alt={photo.alt || 'Image from Pexels'}
                  width={photo.width}
                  height={photo.height}
                  priority={true}
                  className='rounded-full drop-shadow-sm object-cover hover:cursor-pointer hover:border-4 hover:border-[#1D0F0F] hover:border-solid'
                  onError={() => handleImageError(photo.id)}
                />
              </div>
              <p className='w-full mt-2 text-center text-sm text-gray-700 truncate dark:text-[#ecece]'>
                {photo.photographer}
              </p>
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  )
}
