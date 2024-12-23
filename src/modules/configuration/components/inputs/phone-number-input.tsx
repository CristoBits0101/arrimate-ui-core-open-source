'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { useTranslations } from 'next-intl'

interface PhoneNumberInputProps {
  name: string
  isPending: boolean
}

const PhoneNumberInput = ({ name, isPending }: PhoneNumberInputProps) => {
  const t = useTranslations('Forms')

  return (
    <FormField
      name={name}
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
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PhoneNumberInput
