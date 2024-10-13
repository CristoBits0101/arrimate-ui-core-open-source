'use client'

import Logo from '@/components/branding/logo'
import Pages from '@/components/navigation/menu/header-navbar'
import ReturnContent from '@/components/navigation/search/rendering/return-content'
import Searcher from '@/components/navigation/search/form/searcher'
import { useSearch } from '@/hooks/useSearch'

export default function Header() {
  const {
    searchTerm,
    isFocused,
    resetSearchInput,
    setResetSearchInput,
    handleSearch,
    handleFocus,
    searchContainerRef,
    locale,
    setIsFocused
  } = useSearch()

  return (
    <header className='col-span-1'>
      <Logo />
      <div id='navigation-container' ref={searchContainerRef}>
        <Searcher
          resetSearchInput={resetSearchInput}
          setResetSearchInput={setResetSearchInput}
          onSearch={handleSearch}
          onFocus={handleFocus}
        />
        {isFocused && searchTerm ? (
          // Bring the search content
          <ReturnContent
            setIsFocused={setIsFocused}
            setResetSearchInput={setResetSearchInput}
            searchTerm={searchTerm}
            locale={locale}
          />
        ) : isFocused ? (
          // Bring recent content
          <ReturnContent
            setIsFocused={setIsFocused}
            setResetSearchInput={setResetSearchInput}
            searchTerm={''}
            locale={locale}
          />
        ) : (
          <Pages />
        )}
      </div>
    </header>
  )
}
