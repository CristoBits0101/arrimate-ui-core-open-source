// Hooks
import { useState, useEffect } from 'react'

interface SearchFormProps {
  resetSearchInput: boolean
  setResetSearchInput: (value: boolean) => void
  onSearch: (term: string) => void
  onFocus: () => void
}

export default function SearchForm({
  resetSearchInput,
  setResetSearchInput,
  onSearch,
  onFocus
}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    onSearch(event.target.value)
  }

  useEffect(() => {
    if (resetSearchInput) {
      setSearchTerm('')
      setResetSearchInput(false)
    }
  }, [resetSearchInput, setResetSearchInput])

  return (
    <input
      className='appearance-[textfield] bg-transparent border-0 border-r-[0.05rem] border-r-[#EBEAEB] dark:border-r-[#3b3b40] h-1/2 outline-none p-4 w-full border-solid dark:placeholder-[#ececed]'
      value={resetSearchInput ? '' : searchTerm}
      onFocus={onFocus}
      type='search'
    />
  )
}
