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

// Type props
interface InterestsInputProps {
  name: string
  isPending: boolean
}

const InterestsInput = ({ name, isPending }: InterestsInputProps) => {
  const { session, hydrated } = useUserSession()
  const [userInterests, setUserInterests] = useState<string | undefined>(
    undefined
  )
  const t = useTranslations('Forms')

  useEffect(() => {
    if (hydrated) setUserInterests(session?.user?.interests || '')
  }, [hydrated, session, t])

  const { control } = useFormContext()

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor='interests' className='uppercase text-sm'>
            {t('inputs.interests')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              type='text'
              id='interests'
              placeholder={userInterests || ''}
              className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default InterestsInput
