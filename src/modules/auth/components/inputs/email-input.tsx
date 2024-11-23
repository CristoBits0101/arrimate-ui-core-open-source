'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { useFormContext } from 'react-hook-form'

// Intl
import { useTranslations } from 'next-intl'

interface EmailInputProps {
  name: string
  isPending: boolean
}

const EmailInput = ({ name, isPending }: EmailInputProps) => {
  const t = useTranslations('Forms')
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='relative h-fit'>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              placeholder={t('inputs.email')}
              type='email'
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#303032] border-[#EBEAEB] dark:border-[#424246] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#424246] dark:focus:bg-[#424246] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#7B7C81]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmailInput
