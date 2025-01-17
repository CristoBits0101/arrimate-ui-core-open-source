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
interface LocationInputProps {
  name: string
  isPending: boolean
}

const LocationInput = ({ name, isPending }: LocationInputProps) => {
  const { session, hydrated } = useUserSession()
  const [userLocation, setUserLocation] = useState<string | undefined>(
    undefined
  )
  const t = useTranslations('Forms')

  useEffect(() => {
    if (hydrated) setUserLocation(session?.user?.location || '')
  }, [hydrated, session, t])

  const { control } = useFormContext()

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor='location' className='uppercase text-sm'>
            {t('inputs.location')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              id='location'
              type='text'
              placeholder={userLocation || ''}
              className='rounded-none border border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#ececed] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default LocationInput
