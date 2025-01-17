'use client'

// Form
import { useFormContext } from 'react-hook-form'

// Hooks
import { useEffect, useState } from 'react'

// Intl
import { useTranslations } from 'next-intl'

// Session
import { useUserSession } from '@/modules/auth/session-data/hooks/useUserSession'

// Shadcn
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'

// Styles
import '@/modules/configuration/profile-update/styles/birthdate-input.css'

// Type props
interface BirthdateInputProps {
  name: string
  isPending: boolean
}

export default function BirthdateInput({
  name,
  isPending
}: BirthdateInputProps) {
  const t = useTranslations('Forms')
  const { session, hydrated } = useUserSession()
  const [userBirthdate, setUserBirthdate] = useState<string | undefined>('')

  useEffect(() => {
    if (hydrated) setUserBirthdate(session?.user?.birthdate || '')
  }, [hydrated, session])

  const { control } = useFormContext()

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor='birthdate' className='uppercase text-sm'>
            {t('inputs.birthdate')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              type='date'
              placeholder={userBirthdate}
              id='birthdate'
              className='text-sm rounded-none border border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#ececed] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}
