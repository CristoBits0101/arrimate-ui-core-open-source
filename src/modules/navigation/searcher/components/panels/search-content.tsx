// Components
import RecentContent from '@/modules/navigation/searcher/components/results/search-recent'
import RecommendedContent from '@/modules/navigation/searcher/components/results/search-recommended'

// Hook
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

export default function SearchContent() {
  // Context
  const { searchTerm } = useSearchContext()

  return (
    <div className='w-full h-fit mt-6'>
      {searchTerm ? <RecommendedContent /> : <RecentContent />}
    </div>
  )
}
