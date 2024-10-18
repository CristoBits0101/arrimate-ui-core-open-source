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
    '/images/profiles/aspect-ratio-1-1/image9.jpg'
  ]

  // Current index of the image being displayed
  const [currentIndex, setCurrentIndex] = useState(0)

  // Changes the current index
  const changeImage = (direction: 'next' | 'prev') => {
    setCurrentIndex((prevIndex) =>
      direction === 'next'
        ? (prevIndex + 1) % images.length
        : (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className='w-full bg-blue-400 flex justify-center items-center'>
      <button
        onClick={() => changeImage('prev')}
        className='px-4 py-2 bg-white rounded'
      >
        Previous
      </button>
      <div className='relative w-64 h-64 mx-4'>
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <button
        onClick={() => changeImage('next')}
        className='px-4 py-2 bg-white rounded'
      >
        Next
      </button>
    </div>
  )
}
