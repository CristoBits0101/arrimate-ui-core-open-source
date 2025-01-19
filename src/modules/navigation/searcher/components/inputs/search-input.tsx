'use client'

// Context
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Intl
import { useTranslations } from 'next-intl'

// Hooks
import { useEffect, useRef } from 'react'

export default function SearchInput() {
  // Context
  const { isFocused, handleChange, searchTerm, updateFocus } =
    useSearchContext()

  // Ref
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Translations
  const t = useTranslations('Searcher')

  // Enfocar el input automáticamente si isFocused es true
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <input
      ref={inputRef}
      className={`appearance-[textfield] bg-transparent border-0 ${
        !isFocused &&
        'border-r-[0.05rem] border-r-[#EBEAEB] dark:border-r-[#3b3b40]'
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
