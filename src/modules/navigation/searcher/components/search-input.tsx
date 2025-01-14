// Intl
import { useTranslations } from 'next-intl'

export default function SearchInput() {
  // Translations
  const t = useTranslations('Searcher')

  // Handle
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <input
      type='search'
      className='appearance-[textfield] bg-transparent border-0 border-r-[0.05rem] border-r-[#EBEAEB] dark:border-r-[#3b3b40] h-1/2 outline-none p-4 w-full border-solid dark:placeholder-[#ececed]'
      placeholder={t('placeholder')}
      onChange={handleChange}
    />
  )
}
