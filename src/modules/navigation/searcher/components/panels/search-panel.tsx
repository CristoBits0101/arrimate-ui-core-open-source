// Components
import RecentContent from '@/modules/navigation/searcher/components/results/search-recent'
import RecommendedContent from '@/modules/navigation/searcher/components/results/search-recommended'

// Hooks
import useSearch from '@/modules/navigation/searcher/hooks/useSearch'

export default function SearchPanel() {
  // Decomposition
  const { searchTerm } = useSearch()

  return (
    <div className='h-fit w-full px-8'>
      {searchTerm ? <RecommendedContent /> : <RecentContent />}
    </div>
  )
}
