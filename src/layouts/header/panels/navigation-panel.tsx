'use-client'

import Navbar from '@/layouts/header/menu/navbar-menu'
import ReturnSearchContent from '@/layouts/header/panels/search-panel'
import Searcher from '@/layouts/header/searcher/components/search-form'
import { useSearch } from '@/modules/navigation/hooks/useSearch'

export default function NavigationPanel() {
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
    <div className='flex flex-col h-fit w-full' ref={searchContainerRef}>
      <Searcher
        resetSearchInput={resetSearchInput}
        setResetSearchInput={setResetSearchInput}
        onSearch={handleSearch}
        onFocus={handleFocus}
      />
      {isFocused && searchTerm ? (
        // Bring the search content
        <ReturnSearchContent
          setIsFocused={setIsFocused}
          setResetSearchInput={setResetSearchInput}
          searchTerm={searchTerm}
          locale={locale}
        />
      ) : isFocused ? (
        // Bring recent content
        <ReturnSearchContent
          setIsFocused={setIsFocused}
          setResetSearchInput={setResetSearchInput}
          searchTerm={''}
          locale={locale}
        />
      ) : (
        <Navbar />
      )}
    </div>
  )
}
