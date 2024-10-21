import chevron_left from '@/assets/icons/buttons/chevron_left.svg'
import chevron_right from '@/assets/icons/buttons/chevron_right.svg'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function HomeCarousel() {
  const images = [
    '/images/profiles/aspect-ratio-1-1/image1.jpg',
    '/images/profiles/aspect-ratio-1-1/image2.jpg',
    '/images/profiles/aspect-ratio-1-1/image3.jpg',
    '/images/profiles/aspect-ratio-1-1/image4.jpg',
    '/images/profiles/aspect-ratio-1-1/image5.jpg',
    '/images/profiles/aspect-ratio-1-1/image6.jpg',
    '/images/profiles/aspect-ratio-1-1/image7.jpg',
    '/images/profiles/aspect-ratio-1-1/image8.jpg',
    '/images/profiles/aspect-ratio-1-1/image9.jpg'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxVisibleImages, setMaxVisibleImages] = useState(13)
  const containerRef = useRef<HTMLDivElement>(null)

  const changeImage = (direction: 'next' | 'prev') => {
    setCurrentIndex((currentIndex) =>
      direction === 'next'
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length
    )
  }

  const updateMaxVisibleImages = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const newMaxImages = Math.floor(containerWidth / 88)
      setMaxVisibleImages(newMaxImages)
    }
  }

  useEffect(() => {
    updateMaxVisibleImages()
    window.addEventListener('resize', updateMaxVisibleImages)
    return () => {
      window.removeEventListener('resize', updateMaxVisibleImages)
    }
  }, [])

  const visibleImages = images.slice(
    currentIndex,
    currentIndex + maxVisibleImages
  )

  if (visibleImages.length < maxVisibleImages) {
    visibleImages.push(
      ...images.slice(0, maxVisibleImages - visibleImages.length)
    )
  }

  return (
    <div className='relative w-full flex justify-between items-center'>
      <button
        onClick={() => changeImage('prev')}
        className='shadow-sm opacity-85 absolute left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center z-10'
      >
        <Image className='bg-transparent w-fit h-fit' src={chevron_left} alt='Previous' />
      </button>
      <div
        ref={containerRef}
        className='relative flex justify-between w-full h-fit overflow-hidden'
      >
        {visibleImages.map((image, index) => (
          <div key={index} className='relative w-20 h-20'>
            <Image
              src={image}
              alt={`Image ${currentIndex + index + 1}`}
              className='drop-shadow-sm w-full h-full object-contain aspect-square rounded-full'
              layout='fill'
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => changeImage('next')}
        className='shadow-sm opacity-85 absolute right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center z-10'
      >
        <Image className='bg-transparent w-fit h-fit' src={chevron_right} alt='Next' />
      </button>
    </div>
  )
}
