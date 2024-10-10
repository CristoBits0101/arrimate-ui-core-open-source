'use client'

import Logo from '@/components/branding/logo'
import Pages from '@/components/navigation/menu/pages'
import Result from '@/components/navigation/search/results'
import Searcher from '@/components/navigation/search/searcher'
import { useLocale } from 'next-intl'
import { useState, useRef, useEffect } from 'react'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const searchContainerRef = useRef<HTMLDivElement>(null)
  const locale = useLocale()

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false)
      setSearchTerm('')
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleFocus = () => {
    setIsFocused(true)
  }

  return (
    <header>
      <Logo />
      <div ref={searchContainerRef}>
        <Searcher onSearch={handleSearch} onFocus={handleFocus} />
        {isFocused && searchTerm ? (
          <Result searchTerm={searchTerm} locale={locale} />
        ) : (
          <Pages />
        )}
      </div>
    </header>
  )
}
