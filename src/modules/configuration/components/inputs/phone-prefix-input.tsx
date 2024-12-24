import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { getPhonePrefixes } from '@/modules/configuration/actions/phone-prefix-action'

interface PhonePrefixInputProps {
  name: string
  isPending: boolean
}

const PhonePrefixInput = ({ name, isPending }: PhonePrefixInputProps) => {
  const t = useTranslations('Forms')
  const [prefixes, setPrefixes] = useState<string[]>([])
  const [filteredPrefixes, setFilteredPrefixes] = useState<string[]>([])
  const [search, setSearch] = useState<string>('')
  const [hasSelected, setHasSelected] = useState<boolean>(false) // Estado para controlar si se seleccionó un prefijo
  const dropdownRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    async function fetchPrefixes() {
      try {
        const fetchedPrefixes = await getPhonePrefixes()
        setPrefixes(fetchedPrefixes)
      } catch (error) {
        console.error('Error fetching phone prefixes:', error)
      }
    }
    fetchPrefixes()
  }, [])

  useEffect(() => {
    if (search.trim() === '' || hasSelected) {
      // No filtrar si se seleccionó un prefijo
      setFilteredPrefixes([])
    } else {
      const lowercasedSearch = search.toLowerCase()
      setFilteredPrefixes(
        prefixes.filter((prefix) =>
          prefix.toLowerCase().includes(lowercasedSearch)
        )
      )
    }
  }, [search, prefixes, hasSelected])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFilteredPrefixes([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className='w-full flex-shrink-0 relative'>
          <FormLabel htmlFor='phone-prefix' className='uppercase text-sm'>
            {t('inputs.phonePrefix')}
          </FormLabel>
          <FormControl>
            <div className='relative'>
              <Input
                {...field}
                value={search}
                onChange={(e) => {
                  setHasSelected(false) // Reinicia el estado de selección al cambiar el valor manualmente
                  setSearch(e.target.value)
                  field.onChange(e.target.value)
                }}
                disabled={isPending}
                type='text'
                id='phone-prefix'
                className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
              />
              {filteredPrefixes.length > 0 && (
                <ul
                  ref={dropdownRef}
                  className='absolute z-10 bg-white dark:bg-[#26272c] border border-[#EBEAEB] dark:border-[#3b3b40] shadow-md w-full max-h-40 overflow-y-auto border-t-0'
                >
                  {filteredPrefixes.map((prefix) => (
                    <li
                      key={prefix}
                      className='text-sm px-3 py-1 cursor-pointer hover:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] rounded-none'
                      onClick={() => {
                        setSearch(prefix)
                        field.onChange(prefix)
                        setFilteredPrefixes([]) // Cerrar dropdown
                        setHasSelected(true) // Marcar como seleccionado
                      }}
                    >
                      {prefix}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PhonePrefixInput
