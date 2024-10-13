import RecentContent from '@/components/navigation/menu/recent-menu'
import SearchContent from '@/components/navigation/menu/search-menu'

type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>
type SetResetSearchInput = React.Dispatch<React.SetStateAction<boolean>>

interface ReturnContentProps {
  searchTerm: string
  locale: string
  setIsFocused: SetIsFocused
  setResetSearchInput: SetResetSearchInput
}

export default function ReturnContent({
  setIsFocused,
  searchTerm,
  locale,
  setResetSearchInput
}: ReturnContentProps) {
  return searchTerm ? (
    <SearchContent
      setResetSearchInput={setResetSearchInput}
      setIsFocused={setIsFocused}
      searchTerm={searchTerm}
      locale={locale}
    />
  ) : (
    <RecentContent
      setResetSearchInput={setResetSearchInput}
      setIsFocused={setIsFocused}
      locale={locale}
    />
  )
}
