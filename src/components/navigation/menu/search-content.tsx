import Link from 'next/link'

type SetIsFocused = React.Dispatch<React.SetStateAction<boolean>>

interface SearchContentProps {
  searchTerm: string
  locale: string
  setIsFocused: SetIsFocused
}

export default function SearchContent({
  setIsFocused,
  searchTerm,
  locale
}: SearchContentProps) {
  const handleFocus = () => {
    setIsFocused(false)
  }
  return (
    <nav className='rounded-3xl mt-2 p-4 text-sm border border-solid border-[#bfbdc050] shadow-sm shadow-[#F4F4F4] w-full h-fit flex flex-col gap-2'>
      <div className='mb-2 w-full h-fit flex justify-between items-center'>
        <h2 className='font-medium'>Recomendado</h2>
        <button onClick={handleFocus}>X</button>
      </div>
      <ul className='flex flex-col gap-2 w-full h-fit'>
        {Array.from({ length: 10 }).map((_, index) => (
          <li className='truncate' key={index}>
            <Link
              href={`/${locale}/search?q=${encodeURIComponent(searchTerm)}`}
              className='truncate'
            >
              Resultado {index + 1} para {searchTerm}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
