import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

interface PasswordInputProps {
  name: string
  isPending: boolean
}

const PasswordInput = ({ name, isPending }: PasswordInputProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              {...field}
              disabled={isPending}
              placeholder='Password'
              type='password'
              className='bg-[#F4F4F4] rounded-none outline-0-[0.05rem] outline-0-solid outline-0-[#bfbdc050] hover:bg-[#bfbdc050] focus:bg-[#bfbdc050] text-[#1d0f0f] placeholder:text-[#1d0f0f] border-0'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default PasswordInput
