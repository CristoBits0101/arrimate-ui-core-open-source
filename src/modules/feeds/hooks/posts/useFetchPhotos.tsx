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
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [prevQuery, setPrevQuery] = useState<string | null>(null)
  

  useEffect(() => {
    const key: string | undefined = process.env.PEXELS_CLIENT_SECRET
    if (!key) {
      setError('PEXELS_CLIENT_SECRET is not defined...')
      setLoading(false)
      return
    }
    if (query !== prevQuery) {
      const client = createClient(key)
      setLoading(true)
      setError(null)
      client.photos
        .search({ query, orientation, size, color, locale, page, per_page })
        .then((response: PhotosWithTotalResults | ErrorResponse) => {
          if ('photos' in response) {
            setPhotos(response.photos)
            setPrevQuery(query)
          } else {
            console.error('Error fetching photos: ', response.error)
            setError('Error fetching photos: ' + response.error)
          }
        })
        .catch((error) => {
          console.error('Error fetching photos: ', error)
          setError('Error fetching photos: ' + error.message)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [query, orientation, size, color, locale, page, per_page, prevQuery])

  return { photos, loading, error }
}
