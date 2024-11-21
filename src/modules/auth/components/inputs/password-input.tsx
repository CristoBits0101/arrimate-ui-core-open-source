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
              className='bg-[#F4F4F4] rounded-none border-[0.094rem] border-solid border-[#EBEAEB] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] text-[#1d0f0f] placeholder:text-[#1d0f0f]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PasswordInput
