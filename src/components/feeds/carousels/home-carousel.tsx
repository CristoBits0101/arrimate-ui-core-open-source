import chevron_left from '@/assets/icons/buttons/chevron_left.svg'
import chevron_right from '@/assets/icons/buttons/chevron_right.svg'
import Image from 'next/image'
import { useState, useEffect, useRef, useCallback } from 'react'

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
      const newMaxImages = Math.floor(containerWidth / 84)
      setMaxVisibleImages(newMaxImages)
    }
  }, [])
  useEffect(() => {
    updateMaxVisibleImages()
    window.addEventListener('resize', updateMaxVisibleImages)
    return () => {
      window.removeEventListener('resize', updateMaxVisibleImages)
    }
  }, [updateMaxVisibleImages])
  const getVisibleImages = () => {
    if (currentIndex + maxVisibleImages > photos.length) {
      const overflow = currentIndex + maxVisibleImages - photos.length
      return [
        ...photos.slice(currentIndex, photos.length),
        ...photos.slice(0, overflow),
      ]
    }
    return photos.slice(currentIndex, currentIndex + maxVisibleImages)
  }
  const visibleImages = getVisibleImages()
  return (
    <div className='relative w-full flex justify-between items-center'>
      <button
        onClick={() => changeImage('prev')}
        className='shadow-sm opacity-85 absolute left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center z-10'
        aria-label='Previous Image'
      >
        <Image
          className='bg-transparent w-fit h-fit'
          src={chevron_left}
          alt='Previous'
        />
      </button>
      <div
        ref={containerRef}
        className='relative flex justify-between w-full h-fit overflow-hidden'
      >
        {visibleImages.map((photo) => (
          <div key={photo.id} className='relative w-20 h-20'>
            <Image
              src={photo.src.medium}
              alt={photo.alt ?? `Image by ${photo.photographer}`}
              className='drop-shadow-sm w-full h-full object-contain aspect-square rounded-full'
              layout='fill'
            />
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
        />
      </button>
    </div>
  )
}

export default HomeCarousel
