'use client'

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { Input } from '@/modules/ui/input'
import { Label } from '@/modules/ui/label'
import { useFormContext } from 'react-hook-form'

// Intl
import { useTranslations } from 'next-intl'

interface EmailInputProps {
  name: string
  isPending: boolean
}

const EmailInput = ({ name, isPending }: EmailInputProps) => {
  const t = useTranslations('Forms')
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='relative h-fit'>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              placeholder=' '
              type='email'
              className='bg-[#F4F4F4] rounded-none border-[0.094rem] border-solid border-[#EBEAEB] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] text-[#1d0f0f] placeholder:text-transparent focus:outline-none focus:ring-0 peer'
            />
          </FormControl>
          {/* 
            Placeholder: Initial styles 
            Focus: Focus styles
            Base: Losing focus
            */}
          <Label
            className='
              absolute 
              left-2 
                    
              transition-all 
              duration-150 

              peer-placeholder-shown:px-1 
              peer-focus:px-1 
              px-1 

              peer-placeholder-shown:top-0 
              peer-focus:-top-0 
              top-0 

              peer-placeholder-shown:translate-y-[-8%] 
              -translate-y-1/2 

              peer-placeholder-shown:text-base 
              peer-focus:text-sm 
              text-xs
              
              peer-placeholder-shown:text-[#1d0f0f] 
              peer-focus:text-[#1d0f0f]
              text-[#1d0f0f]'
            htmlFor={name}
          >
            {t('inputs.email')}
          </Label>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default EmailInput
