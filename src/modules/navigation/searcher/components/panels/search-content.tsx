// Components
import RecentContent from '@/modules/navigation/searcher/components/results/search-recent'
import RecommendedContent from '@/modules/navigation/searcher/components/results/search-recommended'

// Hook
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

export default function SearchContent() {
  // Context
  const { searchTerm } = useSearchContext()

  return (
    <div className='w-full h-full py-8'>
      {searchTerm ? <RecommendedContent /> : <RecentContent />}
    </div>
  )
}
