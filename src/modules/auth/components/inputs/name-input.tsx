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
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#303032] border-[#EBEAEB] dark:border-[#424246] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#424246] text-[#1D0F0F] dark:text-[#B9BBDE] placeholder:text-[#1D0F0F] dark:placeholder:text-[#D4DBE2]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default NameInput
