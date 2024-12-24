'use client'

// Form
import { useFormContext } from 'react-hook-form'

// Hooks
import { useEffect, useState } from 'react'

// Intl
import { useTranslations } from 'next-intl'

// Session
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'

// Shadcn
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'

// Allow types
type Prediction = {
  description: string
  place_id: string
}

/**
 * Allow properties
 * 
 * name field
 * isPending state
 * setValue searched
 * prefictions returned
 */
interface InputProps {
  name: string
  isPending: boolean
  setValue(value: string): void
  predictions: Prediction[]
}

const CountryInput = ({
  name,
  isPending,
  predictions,
  setValue
}: InputProps) => {
  // Intl translations
  const t = useTranslations('Forms')

  // Get session and hydrated state
  const { session, hydrated } = useUserSession()

  // State for user's country
  const [userCountry, setUserCountry] = useState<string | undefined>('')

  const { control, setValue: setFormValue } = useFormContext()

  // Try to get country from session
  useEffect(() => {
    if (hydrated) {
      const country = session?.user?.country || ''
      setUserCountry(country)
      setFormValue(name, country)
    }
  }, [hydrated, session, setFormValue, name])

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setUserCountry(value)
    setFormValue(name, value)
    setValue(value)
  }

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='relative h-fit'>
          <FormLabel htmlFor='country' className='uppercase text-sm'>
            {/* Label title */}
            {t('inputs.country')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              type='search'
              id='country'
              placeholder={userCountry && userCountry}
              value={field.value || ''}
              onChange={handleOnChange}
              className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          {/* Mostrar predicciones */}
          <div>
            <h3>Predictions</h3>
            <ul>
              {predictions.map((prediction) => (
                <li key={prediction.place_id}>{prediction.description}</li>
              ))}
            </ul>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default CountryInput
