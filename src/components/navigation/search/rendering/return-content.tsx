import RecentContent from '@/components/navigation/menu/recent-content'
import SearchContent from '@/components/navigation/menu/search-content'

type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>
type SetSearchTerm = React.Dispatch<React.SetStateAction<string>>

interface ReturnContentProps {
  searchTerm: string
  locale: string
  setIsFocused: SetIsFocused
  setSearchTerm: SetSearchTerm
}

export default function ReturnContent({
  setIsFocused,
  searchTerm,
  locale,
  setSearchTerm
}: ReturnContentProps) {
  return searchTerm ? (
    <SearchContent
      setSearchTerm={setSearchTerm}
      setIsFocused={setIsFocused}
      searchTerm={searchTerm}
      locale={locale}
    />
  ) : (
    <RecentContent
      setSearchTerm={setSearchTerm}
      setIsFocused={setIsFocused}
      locale={locale}
    />
  )
}
