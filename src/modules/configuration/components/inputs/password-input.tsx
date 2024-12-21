'use client'

// Imports form components for building the password input
import { useEffect, useState } from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'

// Declares the interface for PasswordInputProps
interface PasswordInputProps {
  // Field name
  name: string
  // Pending state flag
  isPending: boolean
}

// Defines the PasswordInput component
const PasswordInput = ({ name, isPending }: PasswordInputProps) => {
  // Gets translations from the form namespace
  const t = useTranslations('Forms')

  // Local state for the placeholder (if needed dynamically)
  const [placeholder, setPlaceholder] = useState<string>(t('inputs.password'))

  // Updates the placeholder if needed (add dynamic logic here)
  useEffect(() => {
    setPlaceholder(t('inputs.password')) // Adjust logic if needed for dynamic placeholders
  }, [t])

  // Retrieves control methods from react-hook-form
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
              placeholder={placeholder}
              type='password'
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PasswordInput
