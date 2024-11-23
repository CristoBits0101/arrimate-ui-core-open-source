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
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#0C151C] border-[#EBEAEB] dark:border-[#16354D] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#7B7C81] dark:focus:bg-[#7B7C81] text-[#1D0F0F] dark:text-[#B9BBDE] placeholder:text-[#1D0F0F] dark:placeholder:text-[#D4DBE2]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmailInput
