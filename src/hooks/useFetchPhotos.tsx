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
  per_page = 10,
}: UseFetchPhotosParams) => {
  const [photos, setPhotos] = useState<PhotosWithTotalResults['photos']>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const client = createClient(
      'qz2aK1LrJu1CkDlnjMa4cPhukIrwl3Y0YUUhejUvpGvV9zSVTQTgbAT3'
    )

    const fetchPhotos = async () => {
      setLoading(true)
      try {
        const response = await client.photos.search({
          query,
          orientation,
          size,
          color,
          locale,
          page,
          per_page
        })
        if ('photos' in response) {
          setPhotos(response.photos)
        } else {
          setError('Error fetching photos')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchPhotos()
  }, [query, orientation, size, color, locale, page, per_page])

  return { photos, loading, error }
}
