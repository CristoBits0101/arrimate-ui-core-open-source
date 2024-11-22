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
               className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] border-[#EBEAEB] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] text-[#1d0f0f] placeholder:text-[#453c41]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default NameInput
