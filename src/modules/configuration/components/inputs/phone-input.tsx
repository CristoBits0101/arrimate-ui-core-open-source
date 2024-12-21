'use client'

// Imports form components
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/modules/ui/form'

// Imports the Input component
import { Input } from '@/modules/ui/input'

// Imports the useFormContext hook
import { useFormContext } from 'react-hook-form'

// Imports the useTranslations hook for localization
import { useTranslations } from 'next-intl'

// Declares the PhoneInputProps interface
interface PhoneInputProps {
  // Name of the phone prefix field
  phonePrefixName: string
  // Name of the phone number field
  phoneNumberName: string
  // Indicates if the form is in a pending state
  isPending: boolean
}

// Defines the PhoneInput component
const PhoneInput = ({
  phonePrefixName,
  phoneNumberName,
  isPending,
}: PhoneInputProps) => {
  // Fetches translations from the forms namespace
  const t = useTranslations('Forms')
  // Gets form control methods
  const { control } = useFormContext()
  return (
    <div className='flex w-full h-fit gap-2'>
      {/* Phone prefix field */}
      <FormField
        control={control}
        name={phonePrefixName}
        render={({ field }) => (
          <FormItem className='w-[5rem] flex-shrink-0'>
            <FormControl>
              <Input
                {...field}
                disabled={isPending}
                placeholder={t('inputs.phonePrefix')}
                type='text'
                className='w-full rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Phone number field */}
      <FormField
        control={control}
        name={phoneNumberName}
        render={({ field }) => (
          <FormItem className='flex-grow'>
            <FormControl>
              <Input
                {...field}
                disabled={isPending}
                placeholder={t('inputs.phoneNumber')}
                type='text'
                className='w-full rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default PhoneInput
