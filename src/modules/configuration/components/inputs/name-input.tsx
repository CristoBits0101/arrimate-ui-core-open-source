'use client'

// Imports form components for building the input
import { useEffect, useState } from 'react'
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'

// Imports the Input component for user input
import { Input } from '@/modules/ui/input'

// Imports the useFormContext hook for form control
import { useFormContext } from 'react-hook-form'

// Imports the useTranslations hook for localization
import { useTranslations } from 'next-intl'

// Declares the interface for NameInputProps
interface NameInputProps {
  // Field name
  name: string
  // Pending state flag
  isPending: boolean
}

// Defines the NameInput component
const NameInput = ({ name, isPending }: NameInputProps) => {
  // Gets translations from the forms namespace
  const t = useTranslations('Forms')
  // Retrieves session and hydrated state
  const { session, hydrated } = useUserSession()
  // Local state for the name input
  const [userName, setUserName] = useState<string | undefined>(undefined)

  // Updates the user name when the session is hydrated
  useEffect(() => {
    if (hydrated) setUserName(session?.user?.name || t('inputs.name'))
  }, [hydrated, session, t])

  // Retrieves control methods from react-hook-form
  const { control } = useFormContext()

  return hydrated ? (
    // Renders the FormField component with control and name
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
              placeholder={userName}
              className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          {/* Displays form validation messages */}
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default NameInput
