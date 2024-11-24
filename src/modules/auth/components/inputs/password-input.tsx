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

interface PasswordInputProps {
  name: string
  isPending: boolean
}

const PasswordInput = ({ name, isPending }: PasswordInputProps) => {
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
              placeholder={t('inputs.password')}
              type='password'
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#292A2C] border-[#EBEAEB] dark:border-[#393A3E] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#393A3E] dark:focus:bg-[#393A3E] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#7B7C81]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PasswordInput
