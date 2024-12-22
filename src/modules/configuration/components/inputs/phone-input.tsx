'use client'

import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'
import { getPhonePrefixes } from '@/modules/configuration/actions/phone-prefix-action'

interface PhoneInputProps {
  phonePrefixName: string
  phoneNumberName: string
  isPending: boolean
}

const PhoneInput = ({
  phonePrefixName,
  phoneNumberName,
  isPending
}: PhoneInputProps) => {
  const t = useTranslations('Forms')
  const { control } = useFormContext()
  const { session, hydrated } = useUserSession()

  const [prefixes, setPrefixes] = useState<string[]>([])
  const [filteredPrefixes, setFilteredPrefixes] = useState<string[]>([])
  const [search, setSearch] = useState<string>('')
  const [userPrefix, setUserPrefix] = useState<string | undefined>(undefined)
  const [userPhone, setUserPhone] = useState<string | undefined>(undefined)

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
    if (hydrated) {
      setUserPrefix(session?.user?.phonePrefix || '')
      setUserPhone(session?.user?.phone || '')
    }
  }, [hydrated, session])

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredPrefixes([])
    } else {
      const lowercasedSearch = search.toLowerCase()
      setFilteredPrefixes(
        prefixes.filter((prefix) =>
          prefix.toLowerCase().includes(lowercasedSearch)
        )
      )
    }
  }, [search, prefixes])

  return hydrated ? (
    <div className='flex w-full h-fit gap-2'>
      <FormField
        control={control}
        name={phonePrefixName}
        render={({ field }) => (
          <FormItem className='w-[6rem] flex-shrink-0 relative'>
            <FormLabel htmlFor='phonePrefix' className='uppercase text-sm'>
              {t('inputs.phonePrefix')}
            </FormLabel>
            <FormControl>
              <div className='relative'>
                <Input
                  {...field}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    field.onChange(e.target.value)
                  }}
                  disabled={isPending}
                  id='phonePrefix'
                  placeholder={userPrefix || ''}
                  className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
                />
                {filteredPrefixes.length > 0 && (
                  <ul className='absolute z-10 bg-white dark:bg-[#26272c] border border-gray-300 dark:border-[#3b3b40] rounded shadow-md w-full max-h-40 overflow-y-auto'>
                    {filteredPrefixes.map((prefix) => (
                      <li
                        key={prefix}
                        className='px-2 py-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-[#3b3b40]'
                        onClick={() => {
                          setSearch(prefix)
                          field.onChange(prefix)
                          setFilteredPrefixes([])
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
      <FormField
        control={control}
        name={phoneNumberName}
        render={({ field }) => (
          <FormItem className='flex-grow'>
            <FormLabel htmlFor='phoneNumber' className='uppercase text-sm'>
              {t('inputs.phoneNumber')}
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                disabled={isPending}
                id='phoneNumber'
                placeholder={userPhone || ''}
                className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  ) : null
}

export default PhoneInput
