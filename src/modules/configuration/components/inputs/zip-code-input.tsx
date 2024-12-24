'use client'

import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'
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

interface InputProps {
  name: string
  isPending: boolean
}

const ZipCodeInput = ({ name, isPending }: InputProps) => {
  const { session, hydrated } = useUserSession()
  const [userZipCode, setUserZipCode] = useState<string | undefined>(undefined)
  const t = useTranslations('Forms')

  useEffect(() => {
    if (hydrated) setUserZipCode(session?.user?.zipCode || '')
  }, [hydrated, session])

  const { control } = useFormContext()

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='relative h-fit'>
          <FormLabel htmlFor='zipCode' className='uppercase text-sm'>
            {t('inputs.zipCode')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              placeholder={userZipCode}
              type='text'
              id='zipCode'
              className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default ZipCodeInput
