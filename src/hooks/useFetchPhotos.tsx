import { useEffect, useState } from 'react'
import { createClient, PhotosWithTotalResults, ErrorResponse } from 'pexels'

interface UseFetchPhotosParams {
  query: string
  orientation?: string
  size?: string
  color?: string
  locale?: string
  page?: number
  per_page?: number
}

export const useFetchPhotos = ({
  query,
  orientation = 'portrait',
  size = 'medium',
  color = 'white',
  locale = 'es-ES',
  page = 1,
  per_page = 10
}: UseFetchPhotosParams) => {
  const [photos, setPhotos] = useState<PhotosWithTotalResults['photos']>([])
  const [loading, setLoading] = useState<boolean>(true) // Spinner state
  const [error, setError] = useState<string | null>(null) // Error state

  useEffect(() => {
    const client = createClient(
      'qz2aK1LrJu1CkDlnjMa4cPhukIrwl3Y0YUUhejUvpGvV9zSVTQTgbAT3'
    )
    setLoading(true)
    setError(null)
    client.photos
      .search({ query, orientation, size, color, locale, page, per_page })
      .then((response: PhotosWithTotalResults | ErrorResponse) => {
        if ('photos' in response) {
          setPhotos(response.photos) // Save the photos to state
        } else {
          console.error('Error fetching photos: ', response.error)
          setError('Error fetching photos: ' + response.error) // Save error to state
        }
      })
      .catch((error) => {
        console.error('Error fetching photos: ', error)
        setError('Error fetching photos: ' + error.message) // Save error to state
      })
      .finally(() => {
        setLoading(false) // End loading when request finishes
      })
  }, [query, orientation, size, color, locale, page, per_page])
  
  return { photos, loading, error }
}
