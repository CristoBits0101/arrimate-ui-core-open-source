'use client'

import { useEffect, useState } from 'react'
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface LocationInputProps {
  name: string
  isPending: boolean
}

const LocationInput = ({ name, isPending }: LocationInputProps) => {
  // Get session and hydrated states
  const { session, hydrated } = useUserSession()
  // Local state for the location input
  const [userLocation, setUserLocation] = useState<string | undefined>(
    undefined
  )
  // Fetches translations from the forms namespace
  const t = useTranslations('Forms')

  // Update the user location when the session is hydrated
  useEffect(() => {
    if (hydrated)
      setUserLocation(session?.user?.location || t('inputs.location'))
  }, [hydrated, session, t])

  // Gets form control methods
  const { control } = useFormContext()

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              placeholder={userLocation}
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default LocationInput
