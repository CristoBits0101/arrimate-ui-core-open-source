'use client'

// Components
import InputsBox from '@/modules/navigation/searcher/components/boxes/inputs-box'
import SearchButton from '@/modules/navigation/searcher/components/buttons/search-button'
import SearchInput from '@/modules/navigation/searcher/components/inputs/search-input'

// Context
import { useThemeContext } from '@/modules/configuration/settings-panel/hooks/useThemeContext'
import { useSearchContext } from '@/modules/navigation/searcher/hooks/useSearchContext'

// Styles
import darkStyles from '@/modules/navigation/searcher/styles/searcher-dark-form.module.css'
import lightStyles from '@/modules/navigation/searcher/styles/searcher-light-form.module.css'

export default function SearchForm() {
  // Context
  const { activeTheme } = useThemeContext()
  const { handleSubmit, isFocused } = useSearchContext()

  return (
    <form
      className={`${
        activeTheme === 'dark' ? darkStyles.form : lightStyles.form
      } flex items-center justify-center text-[#1d0f0f] text-[0.875rem] w-full h-11 ${
        !isFocused ? 'px-8' : 'px-4'
      } `}
      onSubmit={handleSubmit}
    >
      <InputsBox>
        <SearchInput />
        <SearchButton />
      </InputsBox>
    </form>
  )
}
