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
interface AddressInputProps {
  name: string
  isPending: boolean
}

const AddressInput = ({ name, isPending }: AddressInputProps) => {
  const { session, hydrated } = useUserSession()
  const [userAddress, setUserAddress] = useState('')
  const t = useTranslations('Forms')

  useEffect(() => {
    if (hydrated) setUserAddress(session?.user?.address || '')
  }, [hydrated, session])

  const { control } = useFormContext()

  return hydrated ? (
    <FormField
      control={control}
      name={`${name}.address`}
      render={({ field }) => (
        <FormItem className='relative h-fit'>
          <FormLabel htmlFor='address' className='uppercase text-sm'>
            {t('inputs.address')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              placeholder={userAddress}
              type='text'
              id='address'
              className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default AddressInput
