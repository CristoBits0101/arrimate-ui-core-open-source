'use client'

// Form
import { useFormContext } from 'react-hook-form'

// Hooks
import { useEffect, useState, useRef } from 'react'

// Intl
import { useTranslations } from 'next-intl'

// Types
import { Dispatch, SetStateAction } from 'react'

// Session
import { useUserSession } from '@/modules/auth/session-data/hooks/useUserSession'

// Shadcn
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'

import { Input } from '@/modules/ui/input'

// Prediction type
type Prediction = {
  description: string
  place_id: string
}

// Type props
interface InputProps {
  name: string
  isPending: boolean
  predictions: Prediction[]
  setValue(value: string): void
  setCountry: Dispatch<SetStateAction<string>>
  setCity: Dispatch<SetStateAction<string>>
}

const ZipCodeInput = ({
  name,
  isPending,
  predictions,
  setValue,
  setCountry,
  setCity
}: InputProps) => {
  // Getting the translations
  const t = useTranslations('Forms')

  // Creating a reference
  const dropdownRef = useRef<HTMLUListElement>(null)
  const { control } = useFormContext()

  // Session and hydrated state
  const { session, hydrated } = useUserSession()

  const [zipCode, setZipCode] = useState<string | undefined>('')

  useEffect(() => {
    if (hydrated) setZipCode(session?.user?.zipCode || '')
  }, [hydrated, session])

  // State for the filtered predictions
  const [filteredPredictions, setFilteredPredictions] = useState<Prediction[]>(
    []
  )

  // Logic for the selected prediction
  const handleOnChange = (value: string, onChange: (value: string) => void) => {
    // Allow only numbers and spaces
    const sanitizedValue = value.replace(/[^\d\s]/g, '')

    // If the values ​​are deleted, the country and city are reset
    if (sanitizedValue.trim() === '') {
      setCountry('')
      setCity('')
    } else {
      setCountry('')
      setCity('')
    }

    // Update the value and call the onChange function
    setValue(sanitizedValue)
    onChange(sanitizedValue)

    // Filter the predictions based on the sanitized value
    const filtered = predictions.filter((prediction) =>
      prediction.description
        .toLowerCase()
        .includes(sanitizedValue.trim().toLowerCase())
    )

    // Set the filtered predictions
    setFilteredPredictions(filtered)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFilteredPredictions([])
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handlePredictionClick = (
    prediction: Prediction,
    onChange: (value: string) => void
  ) => {
    // Extract the numeric value from the prediction's description (postal code)
    const extractedNumbers = prediction.description.match(/^\d+/)?.[0] || ''

    // Extract the city (text between the postal code and the last comma)
    const cityMatch = prediction.description.match(/^\d+\s+(.*?)\s*,.*?$/)
    const extractedCity = cityMatch ? cityMatch[1].trim() : ''

    // Extract the country (last segment after the last comma)
    const countryMatch = prediction.description.match(/,([^,]+)$/)
    const extractedCountry = countryMatch ? countryMatch[1].trim() : ''

    // Set the values accordingly
    setValue(extractedNumbers)
    onChange(extractedNumbers)
    setCity(extractedCity)
    setCountry(extractedCountry)

    // Clear the filtered predictions
    setFilteredPredictions([])
  }

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
            <div className='relative'>
              <Input
                {...field}
                disabled={isPending}
                type='text'
                id='zipCode'
                placeholder={zipCode || ''}
                value={field.value || ''}
                onChange={(e) => handleOnChange(e.target.value, field.onChange)}
                pattern='\d*'
                inputMode='numeric'
                className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#ececed] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
              />
              {filteredPredictions.length > 0 && (
                // Assigning reference
                <ul
                  ref={dropdownRef}
                  className='absolute z-10 bg-white dark:bg-[#26272c] border border-[#EBEAEB] dark:border-[#3b3b40] shadow-md w-full max-h-40 overflow-y-auto border-t-0'
                >
                  {filteredPredictions.map((prediction) => (
                    <li
                      key={prediction.place_id}
                      className='text-sm px-3 py-1 cursor-pointer hover:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] rounded-none'
                      onClick={() =>
                        handlePredictionClick(prediction, field.onChange)
                      }
                    >
                      {prediction.description}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default ZipCodeInput
