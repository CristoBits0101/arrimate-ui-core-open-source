// Components
import SearchInput from '@/modules/navigation/searcher/components/search-input'
import SearchButton from '@/modules/navigation/searcher/components/search-button'

// Styles
import styles from '@/modules/navigation/searcher/styles/searcher-form.module.css'

export default function SearchForm() {
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} flex items-center justify-center text-[#1d0f0f] text-[0.875rem] w-full h-11 px-8`}
    >
      <div
        className='flex items-center bg-[#f4f4f4] dark:bg-[#26272C] border border-[#EBEAEB] dark:border-[#3b3b40] rounded-full h-full w-full'
        style={{}}
      >
        <SearchInput />
        <SearchButton />
      </div>
    </form>
  )
}
