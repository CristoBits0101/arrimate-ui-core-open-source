import HomeCarousel from '@/components/feeds/carousels/home-carousel'
import { useFetchPhotos } from '@/hooks/useFetchPhotos'

export default function ShowPostStories() {
  const { photos, loading, error } = useFetchPhotos({
    query: 'happy',
    orientation: 'square',
    per_page: 12,
    page: 4
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return <HomeCarousel photos={photos} />
}
