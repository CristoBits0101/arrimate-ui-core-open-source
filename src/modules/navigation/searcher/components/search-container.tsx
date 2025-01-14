// Components
import InputContainer from '@/modules/navigation/searcher/components/input-container'
import SearchButton from '@/modules/navigation/searcher/components/search-button'
import SearchForm from '@/modules/navigation/searcher/components/search-form'
import SearchInput from '@/modules/navigation/searcher/components/search-input'

export default function SearchContainer() {
  return (
    <SearchForm>
      <InputContainer>
        <SearchInput />
        <SearchButton />
      </InputContainer>
    </SearchForm>
  )
}
