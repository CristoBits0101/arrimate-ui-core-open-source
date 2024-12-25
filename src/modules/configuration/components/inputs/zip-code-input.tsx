'use client'

import { Dispatch, SetStateAction } from 'react'
import { useFormContext } from 'react-hook-form'
import { useEffect, useState, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'

type Prediction = {
  description: string
  place_id: string
}

interface InputProps {
  name: string
  isPending: boolean
  predictions: Prediction[]
  setValue(value: string): void
  setCountry: Dispatch<SetStateAction<string>>
}

const ZipCodeInput = ({
  name,
  isPending,
  predictions,
  setValue,
  setCountry
}: InputProps) => {
  const dropdownRef = useRef<HTMLUListElement>(null)
  const t = useTranslations('Forms')
  const { control } = useFormContext()
  const { session, hydrated } = useUserSession()
  const [filteredPredictions, setFilteredPredictions] = useState<Prediction[]>(
    []
  )

  const handleOnChange = (value: string, onChange: (value: string) => void) => {
    const numericValue = value.replace(/\D/g, '')
    setValue(numericValue)
    onChange(numericValue)
    const filtered = predictions.filter((prediction) =>
      prediction.description.toLowerCase().includes(value.toLowerCase())
    )
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
    // Extracts the numeric values from the prediction's description
    const extractedNumbers = prediction.description.match(/\d+/g)?.join('') || ''

    // Extracts the last word from the prediction's description
    const lastWord = prediction.description.trim().split(' ').pop() || ''

    // Sets the numeric value for further processing
    setValue(extractedNumbers)
    onChange(extractedNumbers)

    // Calls setCountry with the last word from the prediction
    setCountry(lastWord)

    // Clears the filtered predictions to hide the dropdown
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
                placeholder={session?.user?.zipCode || ''}
                value={field.value || ''}
                onChange={(e) => handleOnChange(e.target.value, field.onChange)}
                pattern='\d*'
                inputMode='numeric'
                className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#EBEBEC] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
              />
              {filteredPredictions.length > 0 && (
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
