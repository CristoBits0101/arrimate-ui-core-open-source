import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

interface NameInputProps {
  name: string
  isPending: boolean
}

const NameInput = ({ name, isPending }: NameInputProps) => {
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
              placeholder='Name'
              className='bg-[#F4F4F4] rounded-none border-[0.05rem] border-solid border-[#bfbdc050] hover:bg-[#bfbdc050] focus:bg-[#bfbdc050] text-[#1d0f0f] placeholder:text-[#1d0f0f]'
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default NameInput
