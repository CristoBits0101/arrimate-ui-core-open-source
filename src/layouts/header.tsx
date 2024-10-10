'use client'

import Logo from '@/components/branding/logo'
import Pages from '@/components/navigation/menu/pages'
import Searcher from '@/components/navigation/search/searcher'
import { useState } from 'react'

export default function Header() {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setSearchTerm('')
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  return (
    <header>
      <Logo />
      <Searcher
        onSearch={handleSearch}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isFocused && searchTerm ? (
        <nav>
          <h2>Recientes</h2>
          <ul>
            {Array.from({ length: 10 }).map((_, index) => (
              <li className='truncate' key={index}>
                <a href='#'>
                  Resultado {index + 1} para {searchTerm}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <Pages />
      )}
    </header>
  )
}
