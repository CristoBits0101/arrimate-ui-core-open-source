import Results from '@/components/navigation/search/search-content'
import RecentSearches from '@/components/navigation/search/recent-content'

interface ContentProps {
  searchTerm?: string
  locale: string
}

export default function ReturnContent({ searchTerm, locale }: ContentProps) {
  return searchTerm ? (
    <Results searchTerm={searchTerm} locale={locale} />
  ) : (
    <RecentSearches locale={locale} />
  )
}
