'use client'

import { useUserSession } from '@/modules/configuration/x/hooks/sessions/useUserSession'
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

interface NewPasswordInputProps {
  name: string
  isPending: boolean
}

const NewPasswordInput = ({ name, isPending }: NewPasswordInputProps) => {
  const t = useTranslations('Forms')
  const { hydrated } = useUserSession()
  const { control } = useFormContext()
  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor='new-password' className='uppercase text-sm'>
            {t('inputs.newPassword')}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              type='password'
              placeholder=''
              id='new-password'
              className='text-sm rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}

export default NewPasswordInput
