'use client'

import Logo from '@/components/branding/logo'
import Pages from '@/components/navigation/menu/header-navbar'
import ReturnContent from '@/components/navigation/search/rendering/return-content'
import Searcher from '@/components/navigation/search/form/searcher'
import { useLocale } from 'next-intl'
import { useState, useRef, useEffect } from 'react'

export default function Header() {
  // Capture the text that is being written
  const [searchTerm, setSearchTerm] = useState<string>('')
  // Detects if the search bar has focus
  const [isFocused, setIsFocused] = useState<boolean>(false)
  // Contains the reference of the menu container
  const searchContainerRef = useRef<HTMLDivElement>(null)
  // Get the language of the web
  const locale = useLocale()

  // Update the status of the search term
  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }
  // Update if the search engine has focus
  const handleFocus = () => {
    setIsFocused(true)
  }

  // Clicks inside the Searcher and Result component do not fire the handleClickOutside event
  useEffect(() => {
    // The function is triggered when clicking anywhere in the document
    document.addEventListener('mousedown', handleClickOutside)
    // Clean the effect
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Closes the search menu if you click outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target as Node)
    ) {
      setIsFocused(false)
      setSearchTerm('')
    }
  }
  // Reset entry
  const handleSearchInput = () => {
      // crea una una función para limpiar el valor del input
      setSearchTerm('')
  }

  return (
    <header>
      <Logo />
      <div id='navigation-container' ref={searchContainerRef}>
        <Searcher onSearch={handleSearch} onFocus={handleFocus} />
        {isFocused && searchTerm ? (
          // Bring the search content
          <ReturnContent setIsFocused={setIsFocused} setSearchTerm={setSearchTerm} searchTerm={searchTerm} locale={locale} />
        ) : isFocused ? (
          // Bring recent content
          <ReturnContent setIsFocused={setIsFocused} setSearchTerm={setSearchTerm} searchTerm={''} locale={locale} />
        ) : (
          <Pages />
        )}
      </div>
    </header>
  )
}
