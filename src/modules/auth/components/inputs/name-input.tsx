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

interface NameInputProps {
  name: string
  isPending: boolean
}

const NameInput = ({ name, isPending }: NameInputProps) => {
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
              placeholder={t('inputs.name')}
              className='rounded-none border-[0.094rem] border-solid dark:bg-[#453C41] bg-[#F4F4F4] dark:border-[#7B7C81] border-[#EBEAEB] dark:hover:bg-[#D4DBE2] dark:focus:bg-[#D4DBE2] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:text-[#D4DBE2] text-[#1d0f0f] dark:placeholder:text-[#D4DBE2] placeholder:text-[#453c41] dark:hover:placeholder:text-[#1D0F0F] dark:focus:placeholder:text-[#1D0F0F] dark:hover:text-[#1D0F0F] dark:focus:text-[#1D0F0F]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default NameInput
