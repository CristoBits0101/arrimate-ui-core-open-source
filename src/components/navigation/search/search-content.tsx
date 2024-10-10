import Link from 'next/link'

interface ResultsProps {
  searchTerm: string
  locale: string
}

export default function SearchContent({ searchTerm, locale }: ResultsProps) {
  return (
    <nav className='rounded-3xl mt-2 p-4 text-sm border border-solid border-[#bfbdc050] shadow-sm w-full h-fit flex flex-col gap-2'>
      <h2>Recomendado</h2>
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
