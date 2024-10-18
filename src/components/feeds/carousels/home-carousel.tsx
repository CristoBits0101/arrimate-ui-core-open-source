import chevron_left from '@/assets/icons/buttons/chevron_left.svg'
import chevron_right from '@/assets/icons/buttons/chevron_right.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function HomeCarousel() {
  // Lista de imágenes
  const images = [
    '/images/profiles/aspect-ratio-1-1/image1.jpg',
    '/images/profiles/aspect-ratio-1-1/image2.jpg',
    '/images/profiles/aspect-ratio-1-1/image3.jpg',
    '/images/profiles/aspect-ratio-1-1/image4.jpg',
    '/images/profiles/aspect-ratio-1-1/image5.jpg',
    '/images/profiles/aspect-ratio-1-1/image6.jpg',
    '/images/profiles/aspect-ratio-1-1/image7.jpg',
    '/images/profiles/aspect-ratio-1-1/image8.jpg',
    '/images/profiles/aspect-ratio-1-1/image9.jpg',
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

  // Current index of the first image being displayed
  const [currentIndex, setCurrentIndex] = useState(0)

  // Maximum number of images to show at once
  const maxVisibleImages = 13

  // Changes the current index
  const changeImage = (direction: 'next' | 'prev') => {
    setCurrentIndex((currentIndex) =>
      direction === 'next'
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length
    )
  }

  // Calculate the images to be displayed based on current index
  const visibleImages = images.slice(
    currentIndex,
    currentIndex + maxVisibleImages
  )

  // If currentIndex + maxVisibleImages exceeds the total number of images, wrap around
  if (visibleImages.length < maxVisibleImages) {
    visibleImages.push(
      ...images.slice(0, maxVisibleImages - visibleImages.length)
    )
  }

  return (
    <div className='relative w-full flex justify-between items-center'>
      {/* Botón "Previous" */}
      <button
        onClick={() => changeImage('prev')}
        className='opacity-75 absolute left-0 bg-white rounded-full w-10 h-10 flex items-center justify-center z-10'
      >
        <Image className='bg-transparent' src={chevron_left} alt='Previous' />
      </button>
      <div className='relative flex justify-between w-full h-fit overflow-hidden'>
        {visibleImages.map((image, index) => (
          <div key={index} className='relative w-20 h-20'>
            <Image
              src={image}
              alt={`Image ${currentIndex + index + 1}`}
              className='drop-shadow w-full h-full object-contain aspect-square rounded-full'
              layout='fill'
            />
          </div>
        ))}
      </div>
      {/* Botón "Next" */}
      <button
        onClick={() => changeImage('next')}
        className='opacity-75 absolute right-0 bg-white rounded-full w-10 h-10 flex items-center justify-center z-10'
      >
        <Image className='bg-transparent' src={chevron_right} alt='Next' />
      </button>
    </div>
  )
}
