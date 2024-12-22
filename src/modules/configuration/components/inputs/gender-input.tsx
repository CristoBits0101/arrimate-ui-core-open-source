'use client'

import { useEffect, useState } from 'react'
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { getGenders } from '@/modules/configuration/actions/user-gender-action'

interface GenderInputProps {
  name: string
  isPending: boolean
}

export default function GenderInput({ name, isPending }: GenderInputProps) {
  const t = useTranslations('Forms')
  const { session, hydrated } = useUserSession()
  const [userGender, setUserGender] = useState<string | undefined>(undefined)
  const [genders, setGenders] = useState<{ id: string; name: string }[]>([])

  const { control } = useFormContext()

  useEffect(() => {
    if (hydrated) {
      setUserGender(session?.user?.gender || '')
    }
  }, [hydrated, session])

  useEffect(() => {
    async function fetchGenders() {
      try {
        const fetchedGenders = await getGenders()
        setGenders(fetchedGenders)
      } catch (error) {
        console.error('Error fetching genders:', error)
      }
    }
    fetchGenders()
  }, [])

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor='gender' className='uppercase text-sm'>
            {t('inputs.gender')}
          </FormLabel>
          <FormControl>
            <select
              {...field}
              value={userGender || ''}
              onChange={(e) => {
                field.onChange(e.target.value)
                setUserGender(e.target.value)
              }}
              disabled={isPending}
              id='gender'
              className='w-full h-9 rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            >
              <option value='' disabled>
                {t('inputs.genders.reserved')}
              </option>
              {genders.map(({ id, name }) => (
                <option key={id} value={id} selected={id === userGender}>
                  {name}
                </option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}
