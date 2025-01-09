import RecentContent from '@/layouts/header/searcher/recent-search'
import RecommendedContent from '@/layouts/header/searcher/recommended-search'

type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>
type SetResetSearchInput = React.Dispatch<React.SetStateAction<boolean>>

interface SearchPanelProps {
  searchTerm: string
  locale: string
  setIsFocused: SetIsFocused
  setResetSearchInput: SetResetSearchInput
}

export default function SearchPanel({
  setIsFocused,
  searchTerm,
  locale,
  setResetSearchInput
}: SearchPanelProps) {
  return (
    <div className='h-fit w-full px-8'>
      {searchTerm ? (
        <RecommendedContent
          setResetSearchInput={setResetSearchInput}
          setIsFocused={setIsFocused}
          searchTerm={searchTerm}
          locale={locale}
        />
      ) : (
        <RecentContent setIsFocused={setIsFocused} locale={locale} />
      )}
    </div>
  )
}
