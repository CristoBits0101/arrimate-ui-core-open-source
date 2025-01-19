'use client'

// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Intl
import { useTranslations } from 'next-intl'

export default function SearchInput() {
  // Context
  const { isFocused, handleChange, searchTerm, updateFocus } =
    useSearchContext()

  // Translations
  const t = useTranslations('Searcher')

  return (
    <input
      className={`appearance-[textfield] bg-transparent border-0 ${
        !isFocused
          ? 'border-r-[0.05rem] border-r-[#EBEAEB] dark:border-r-[#3b3b40]'
          : ''
      } h-1/2 outline-none p-4 w-full border-solid dark:placeholder-[#ececed] dark:text-[#ececed]`}
      onChange={handleChange}
      onFocus={() => updateFocus(true)}
      pattern='.*'
      placeholder={t('placeholder')}
      type='search'
      value={searchTerm}
    />
  )
}
