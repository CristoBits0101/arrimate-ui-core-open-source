// Components
import RecentContent from '@/modules/navigation/searcher/components/search-recent'
import RecommendedContent from '@/modules/navigation/searcher/components/search-recommended'

// Types
type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>
type SetResetSearchInput = React.Dispatch<React.SetStateAction<boolean>>

// Type props 
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
    // Detect if the search term has value
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
