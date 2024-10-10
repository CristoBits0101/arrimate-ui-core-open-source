// recent-searches.tsx
import Link from 'next/link'

interface RecentProps {
  locale: string
}

const recentSearches = [
  { id: '1', title: 'Artículo 1' },
  { id: '2', title: 'Artículo 2' }
]

export default function RecentContent({ locale }: RecentProps) {
  return (
    <nav className='rounded-3xl mt-2 p-4 text-sm border border-solid border-[#bfbdc050] shadow-sm w-full h-fit flex flex-col gap-2'>
      <h2>Recientes</h2>
      <ul className='flex flex-col gap-2 w-full h-fit'>
        {recentSearches.map((item, index) => (
          <li className='truncate' key={item.id}>
            <Link
              href={`/${locale}/item/${item.id}`}
              className='truncate'
            >
              Resultado {index + 1}: {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
