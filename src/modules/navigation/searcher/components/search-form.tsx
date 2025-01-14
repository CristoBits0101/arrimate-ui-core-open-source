// Styles
import styles from '@/modules/navigation/searcher/styles/searcher-form.module.css'

// Types
interface SearchFormProps {
  children: React.ReactNode
}

export default function SearchForm({ children }: SearchFormProps) {
  // Validation
  if (!children) return

  // Handle
  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  
  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} flex items-center justify-center text-[#1d0f0f] text-[0.875rem] w-full h-11 px-8`}
    >
      {children}
    </form>
  )
}
