'use client'

// Components
import InputsBox from '@/modules/navigation/searcher/components/boxes/inputs-box'
import SearchButton from '@/modules/navigation/searcher/components/buttons/search-button'
import SearchInput from '@/modules/navigation/searcher/components/inputs/search-input'

// Hooks
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Styles
import styles from '@/modules/navigation/searcher/styles/searcher-dark-form.module.css'

export default function SearchForm() {
  // Context
  const { handleSubmit } = useSearchContext()

  return (
    <form
      className={`${styles.form} flex items-center justify-center text-[#1d0f0f] text-[0.875rem] w-full h-11 px-8`}
      onSubmit={handleSubmit}
    >
      <InputsBox>
        <SearchInput />
        <SearchButton />
      </InputsBox>
    </form>
  )
}
