'use client'

// Custom hooks
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'

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

// React
import { useEffect, useState } from 'react'

// Declares the EmailInputProps interface
interface EmailInputProps {
  // Name of the form field
  name: string
  // Indicates if the form is in a pending state
  isPending: boolean
}

// Defines the EmailInput component
const EmailInput = ({ name, isPending }: EmailInputProps) => {
  // Get session and hydrated states
  const { session, hydrated } = useUserSession()
  // Local state for the email input
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined)
  // Fetches translations from the forms namespace
  const t = useTranslations('Forms')
  // Update the user email when the session is hydrated
  useEffect(() => {
    if (hydrated) setUserEmail(session?.user?.email || t('inputs.email'))
  }, [hydrated, session, t])
  // Gets form control methods
  const { control } = useFormContext()
  return hydrated ? (
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
              placeholder={userEmail}
              // Sets input type to email
              type='email'
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          {/* Displays any form validation messages */}
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default EmailInput
