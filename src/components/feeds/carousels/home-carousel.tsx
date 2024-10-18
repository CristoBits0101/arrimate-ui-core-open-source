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

  const [currentIndex, setCurrentIndex] = useState(0)
  const [maxVisibleImages, setMaxVisibleImages] = useState(13) // Número inicial de imágenes visibles
  const containerRef = useRef<HTMLDivElement>(null) // Referencia al div

  // Cambia el índice actual para navegar entre las imágenes
  const changeImage = (direction: 'next' | 'prev') => {
    setCurrentIndex((currentIndex) =>
      direction === 'next'
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length
    )
  }

  // Actualiza el número máximo de imágenes visibles basado en el tamaño del contenedor
  const updateMaxVisibleImages = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const newMaxImages = Math.floor(containerWidth / 88)
      setMaxVisibleImages(newMaxImages)
    }
  }

  // useEffect para ejecutar el cálculo inicial y cada vez que la ventana cambie de tamaño
  useEffect(() => {
    // Calcula el número de imágenes visibles al renderizar el componente
    updateMaxVisibleImages()

    // Listener para el cambio de tamaño de la ventana
    window.addEventListener('resize', updateMaxVisibleImages)

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('resize', updateMaxVisibleImages)
    }
  }, [])

  // Calcula las imágenes visibles basadas en el índice actual
  const visibleImages = images.slice(
    currentIndex,
    currentIndex + maxVisibleImages
  )

  // Si el índice + maxVisibleImages supera el total de imágenes, se reinicia el ciclo
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
        className='shadow opacity-85 absolute left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center z-10'
      >
        <Image className='bg-transparent w-fit h-fit' src={chevron_left} alt='Previous' />
      </button>
      
      {/* Contenedor de las imágenes */}
      <div
        ref={containerRef} // Referencia al div que contiene las imágenes
        className='relative flex justify-between w-full h-fit overflow-hidden'
      >
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
        className='shadow opacity-85 absolute right-2 bg-white rounded-full w-8 h-8 flex items-center justify-center z-10'
      >
        <Image className='bg-transparent w-fit h-fit' src={chevron_right} alt='Next' />
      </button>
    </div>
  )
}
