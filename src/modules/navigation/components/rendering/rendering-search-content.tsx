import RecentContent from '@/modules/navigation/components/menu/recent-menu'
import RecommendedContent from '@/modules/navigation/components/menu/recommended-menu'

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
    <RecommendedContent
      setResetSearchInput={setResetSearchInput}
      setIsFocused={setIsFocused}
      searchTerm={searchTerm}
      locale={locale}
    />
  ) : (
    <RecentContent
      setIsFocused={setIsFocused}
      locale={locale}
    />
  )
}
