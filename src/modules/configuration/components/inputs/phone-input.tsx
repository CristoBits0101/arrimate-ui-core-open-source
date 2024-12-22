'use client'

import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/modules/ui/select'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { getPhonePrefixes } from '@/modules/configuration/actions/phone-prefix'

interface PhoneInputProps {
  phonePrefixName: string
  phoneNumberName: string
  isPending: boolean
}

const PhoneInput = ({
  phonePrefixName,
  phoneNumberName,
  isPending
}: PhoneInputProps) => {
  const t = useTranslations('Forms')
  const { control } = useFormContext()
  const [prefixes, setPrefixes] = useState<string[]>([])

  useEffect(() => {
    async function fetchPrefixes() {
      try {
        const fetchedPrefixes = await getPhonePrefixes()
        setPrefixes(fetchedPrefixes)
      } catch (error) {
        console.error('Error fetching phone prefixes:', error)
      }
    }
    fetchPrefixes()
  }, [])

  return (
    <div className='flex w-full h-fit gap-2'>
      <FormField
        control={control}
        name={phonePrefixName}
        render={({ field }) => (
          <FormItem className='w-[7.5rem] flex-shrink-0'>
            <FormLabel htmlFor='phonePrefix' className='uppercase text-sm'>
              {t('inputs.phonePrefix')}
            </FormLabel>
            <FormControl>
              <Select {...field} disabled={isPending}>
                <SelectTrigger className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489] outline-none hover:outline-none focus:outline-none shadow-none'>
                  <SelectValue placeholder={t('inputs.select')} />
                </SelectTrigger>
                <SelectContent>
                  {prefixes.map((prefix) => (
                    <SelectItem key={prefix} value={prefix}>
                      {prefix}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={phoneNumberName}
        render={({ field }) => (
          <FormItem className='flex-grow'>
            <FormLabel htmlFor='phoneNumber' className='uppercase text-sm'>
              {t('inputs.phoneNumber')}
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                disabled={isPending}
                id='phoneNumber'
                className='rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
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
