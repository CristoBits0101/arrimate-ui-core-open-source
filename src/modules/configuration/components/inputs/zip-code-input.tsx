import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

interface InputProps {
  name: string
  isPending: boolean
  value: string
  onValueChange: (value: string) => void
  predictions?: string[]
}

const ZipCodeInput = ({
  name,
  isPending,
  value,
  onValueChange,
  predictions
}: InputProps) => {
  const { session, hydrated } = useUserSession()
  const t = useTranslations('Forms')

  useEffect(() => {
    if (hydrated && !value) {
      onValueChange(session?.user?.zipCode || '')
    }
  }, [hydrated, session, value, onValueChange])

  const { control } = useFormContext()

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='relative h-fit'>
          <FormLabel htmlFor='zipCode' className='uppercase text-sm'>
            {t('inputs.zipCode')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              value={value}
              onChange={(e) => onValueChange(e.target.value)}
              disabled={isPending}
              type='text'
              id='zipCode'
              className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
            {predictions && (
              <ul className='absolute bg-white shadow-lg z-10 max-h-60 overflow-auto w-full'>
                {predictions.map((prediction, index) => (
                  <li
                    key={index}
                    className='p-2 hover:bg-gray-200 cursor-pointer'
                    onClick={() => onValueChange(prediction)}
                  >
                    {prediction}
                  </li>
                ))}
              </ul>
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default ZipCodeInput
