import chevron_left from '@/assets/icons/buttons/chevron_left.svg'
import chevron_right from '@/assets/icons/buttons/chevron_right.svg'
import Image from 'next/image'
import unknownImage from '@/assets/images/profiles/aspect-ratio-1-1/unknownImage.jpg'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'

interface Photo {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  photographer_id: string
  avg_color: string | null
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  liked: boolean
  alt: string | null
}

interface CarouselProps {
  photos: Photo[]
}

const HomeCarousel: React.FC<CarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [maxVisibleImages, setMaxVisibleImages] = useState<number>(13)
  const containerRef = useRef<HTMLDivElement>(null)
  const changeImage = useCallback(
    (direction: 'next' | 'prev') => {
      setCurrentIndex((prevIndex) => {
        const totalPhotos = photos.length
        return direction === 'next'
          ? (prevIndex + 1) % totalPhotos
          : (prevIndex - 1 + totalPhotos) % totalPhotos
      })
    },
    [photos.length]
  )
  const updateMaxVisibleImages = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const newMaxImages = Math.floor(containerWidth / 96)
      setMaxVisibleImages(newMaxImages)
    }
  }, [])
  useEffect(() => {
    updateMaxVisibleImages()
    window.addEventListener('resize', updateMaxVisibleImages)
    return () => window.removeEventListener('resize', updateMaxVisibleImages)
  }, [updateMaxVisibleImages])
  const getVisibleImages = useCallback(() => {
    if (currentIndex + maxVisibleImages > photos.length) {
      const overflow = currentIndex + maxVisibleImages - photos.length
      return [
        ...photos.slice(currentIndex, photos.length),
        ...photos.slice(0, overflow)
      ]
    }
    return photos.slice(currentIndex, currentIndex + maxVisibleImages)
  }, [currentIndex, maxVisibleImages, photos])
  useEffect(() => {
    const preloadAdjacentImages = () => {
      const nextIndex = (currentIndex + 1) % photos.length
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length

      const preloadImage = (src: string) => {
        const img = new window.Image()
        img.src = src
      }

      if (photos[nextIndex]?.src.small)
        preloadImage(photos[nextIndex].src.small)

      if (photos[prevIndex]?.src.small)
        preloadImage(photos[prevIndex].src.small)
    }

    preloadAdjacentImages()
  }, [currentIndex, photos])
  const visibleImages = useMemo(() => getVisibleImages(), [getVisibleImages])
  return (
    <div className='relative w-full flex justify-between items-center'>
      <button
        onClick={() => changeImage('prev')}
        className='shadow-sm opacity-85 absolute left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center z-20'
        aria-label='Previous Image'
      >
        <Image
          className='bg-transparent w-fit h-fit drop-shadow-sm'
          src={chevron_left}
          alt='Previous'
          loading='lazy'
        />
      </button>
      <div
        ref={containerRef}
        className='relative flex justify-between w-full h-fit overflow-visible'
      >
        {visibleImages.map((photo) => (
          <div
            key={photo.id}
            className='relative w-20 h-20 flex flex-col text-center text-sm gap-2'
          >
            <span
              className='relative w-20 h-20 flex items-center justify-center bg-cover bg-center bg-no-repeat aspect-square rounded-full z-10 shadow-sm'
              style={{
                backgroundColor: photo.avg_color || '#f0f0f0',
                backgroundImage: `url(${photo.src.small || unknownImage})`
              }}
            ></span>
            <h3 className='w-20 text-sm'>
              {photo.photographer.length > 8
                ? photo.photographer.slice(0, 8) + '...'
                : photo.photographer}
            </h3>
          </div>
        ))}
      </div>
      <button
        onClick={() => changeImage('next')}
        className='shadow-sm opacity-85 absolute right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center z-10'
        aria-label='Next Image'
      >
        <Image
          className='bg-transparent w-fit h-fit'
          src={chevron_right}
          alt='Next'
          loading='lazy'
        />
      </button>
    </div>
  )
}

export default HomeCarousel
