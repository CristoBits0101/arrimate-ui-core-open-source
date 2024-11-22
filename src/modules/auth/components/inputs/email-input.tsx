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
               className='rounded-none border-[0.094rem] border-solid dark:bg-[#D4DBE2] bg-[#F4F4F4] dark:border-[#7B7C81] border-[#EBEAEB] dark:hover:bg-[#453C41] dark:focus:bg-[#453C41] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:text-[#D4DBE2] text-[#1d0f0f] dark:placeholder:text-[#1d0f0f] placeholder:text-[#453c41]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmailInput
