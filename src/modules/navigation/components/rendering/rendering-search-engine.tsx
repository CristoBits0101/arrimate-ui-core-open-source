'use-client'

import Pages from '@/modules/navigation/components/menu/navbar-menu'
import ReturnSearchContent from '@/modules/navigation/components/rendering/rendering-search-content'
import Searcher from '@/modules/navigation/components/forms/searcher-form'
import { useSearch } from '@/modules/hooks/useSearch'

export default function ReturnSearchEngine() {
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
        <Pages />
      )}
    </div>
  )
}
