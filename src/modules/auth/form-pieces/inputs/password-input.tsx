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
interface PasswordInputProps {
  name: string
  isPending: boolean
}

const PasswordInput = ({ name, isPending }: PasswordInputProps) => {
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
            {/* Renders the password input field */}
            <Input
              {...field}
              disabled={isPending}
              placeholder={t('inputs.password')}
              type='password'
              id='password'
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

export default PasswordInput
