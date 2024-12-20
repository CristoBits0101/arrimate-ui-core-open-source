'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'

import { Input } from '@/modules/ui/input'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

interface SloganInputProps {
  name: string
  isPending: boolean
}

const SloganInput = ({ name, isPending }: SloganInputProps) => {
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
              placeholder={t('inputs.slogan')}
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default SloganInput
