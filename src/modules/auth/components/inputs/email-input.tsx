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
        <FormItem>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              placeholder={t('inputs.email')}
              type='email'
              className='bg-[#F4F4F4] rounded-none border-[0.094rem] border-solid border-[#EBEAEB] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] text-[#1d0f0f] placeholder:text-[#1d0f0f] focus:outline-none focus:ring-0'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmailInput
