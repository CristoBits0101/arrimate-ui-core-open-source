import RecentContent from '@/components/navigation/menu/recent-content'
import SearchContent from '@/components/navigation/menu/search-content'

type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>

interface ReturnContentProps {
  searchTerm?: string | undefined
  locale: string
  setIsFocused: SetIsFocused
}

export default function ReturnContent({
  setIsFocused,
  searchTerm,
  locale
}: ReturnContentProps) {
  return searchTerm ? (
    <SearchContent
      setIsFocused={setIsFocused}
      searchTerm={searchTerm}
      locale={locale}
    />
  ) : (
    <RecentContent setIsFocused={setIsFocused} locale={locale} />
  )
}
