// Components
import RecentContent from '@/modules/navigation/searcher/components/results/search-recent'
import RecommendedContent from '@/modules/navigation/searcher/components/results/search-recommended'

// Hook
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

export default function SearchContent() {
  // Context
  const { searchTerm } = useSearchContext()

  return (
    <div className='h-fit w-full px-8'>
      {searchTerm ? <RecommendedContent /> : <RecentContent />}
    </div>
  )
}
