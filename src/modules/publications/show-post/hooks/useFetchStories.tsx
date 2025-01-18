'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useFetchImages } from '@/modules/publications/show-post/hooks/useFetchImages'

interface Photo {
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

interface UseFetchStoriesProps {
  query: string
  orientation: string
  perPage: number
  page: number
}

interface UseFetchStoriesReturn {
  photos: Photo[]
  error: string | null
  effectiveSlidesPerView: number
  containerRef: React.RefObject<HTMLDivElement>
  handleImageError: (photoId: number) => void
  handleClick: () => void
  isImageErrorMap: { [key: number]: boolean }
}

export const useFetchStories = ({
  query,
  orientation,
  perPage,
  page
}: UseFetchStoriesProps): UseFetchStoriesReturn => {
  const audio = new Audio('/sounds/whoosh-effect-2.mp3')

  // Query
  const { photos: fetchedPhotos, error } = useFetchImages({
    query,
    orientation,
    per_page: perPage,
    page
  })

  const [slidesPerView, setSlidesPerView] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isImageErrorMap, setIsImageErrorMap] = useState<{
    [key: number]: boolean
  }>({})

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
    if (fetchedPhotos.length > 0) updateSlidesPerView()
  }, [fetchedPhotos, updateSlidesPerView])

  const uniquePhotos: Photo[] = Array.from(
    new Set(fetchedPhotos.map((photo: Photo) => photo.src?.small))
  ).map(
    (src) =>
      fetchedPhotos.find((photo: Photo) => photo.src?.small === src) as Photo
  )

  const effectiveSlidesPerView = Math.min(slidesPerView, uniquePhotos.length)

  const handleImageError = (photoId: number) => {
    setIsImageErrorMap((prev) => ({ ...prev, [photoId]: true }))
  }

  const handleClick = () => {
    audio.play()
  }

  return {
    photos: uniquePhotos,
    error,
    effectiveSlidesPerView,
    containerRef,
    handleImageError,
    handleClick,
    isImageErrorMap
  }
}
