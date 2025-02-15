'use client'

// Context
import { useFormContext } from 'react-hook-form'

// Intl
import { useTranslations } from 'next-intl'

// Shadcn
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'

import { Input } from '@/modules/ui/input'

// Type props
interface NameInputProps {
  name: string
  isPending: boolean
}

const NameInput = ({ name, isPending }: NameInputProps) => {
  // Trnaslations
  const t = useTranslations('Forms')
  // Context
  const { control } = useFormContext()
  // Renders FormField with given control and name
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        // Wraps input in a FormItem
        <FormItem>
          {/* Provides input control */}
          <FormControl>
            {/* Renders the input field */}
            <Input
              {...field}
              disabled={isPending}
              placeholder={t('inputs.name')}
              id='name'
              className='rounded-none border border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          {/*Validation messages */}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default NameInput
