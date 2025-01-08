'use client'

// Imports form components
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'

// Imports the Input component
import { Input } from '@/modules/ui/input'

// Imports the useFormContext hook
import { useFormContext } from 'react-hook-form'

// Imports the useTranslations hook for localization
import { useTranslations } from 'next-intl'

// Declares the EmailInputProps interface
interface EmailInputProps {
  // Name of the form field
  name: string
  // Indicates if the form is in a pending state
  isPending: boolean
}

// Defines the EmailInput component
const EmailInput = ({ name, isPending }: EmailInputProps) => {
  // Fetches translations from the forms namespace
  const t = useTranslations('Forms')
  // Gets form control methods
  const { control } = useFormContext()
  return (
    // Renders a FormField with the provided control and name
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
          {/* Displays any form validation messages */}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmailInput
