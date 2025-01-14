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
interface EmailInputProps {
  name: string
  isPending: boolean
}

const EmailInput = ({ name, isPending }: EmailInputProps) => {
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
        // Renders a form item
        <FormItem className='relative h-fit'>
          {/* Renders the form control */}
          <FormControl>
            {/* Renders the email input field */}
            <Input
              {...field}
              // Disables input if pending
              disabled={isPending}
              // Sets placeholder text
              placeholder={t('inputs.email')}
              // Sets input type to email
              type='email'
              id='email'
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          {/*Validation messages */}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmailInput
