// Components
import RecentContent from '@/modules/navigation/searcher/components/results/search-recent'
import RecommendedContent from '@/modules/navigation/searcher/components/results/search-recommended'

// Hook
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Intl
import { useTranslations } from 'next-intl'
import SearchForm from '../forms/search-form'

export default function SearchContent() {
  // Context
  const { searchTerm } = useSearchContext()

  // Translations
  const t = useTranslations('Searcher')

  return (
    <div className='w-full h-full py-8 grid grid-rows-[44px,1fr] gap-8'>
      <div className='w-full h-11 px-4 flex items-center'>
        <h2 className='font-medium text-lg'>{t('placeholder')}</h2>
      </div>
      <div className='w-full h-full flex flex-col gap-8'>
        <SearchForm />
        {searchTerm ? <RecommendedContent /> : <RecentContent />}
      </div>
    </div>
  )
}
