// statuses/effects.
'use client'

// components
import CardWrapper from '@/components/auth/cards/card-wrapper'

// react-hook-form
import { useForm } from 'react-hook-form'

// next-intl
import { useLocale } from 'next-intl'

// shadcn/ui
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// zod
import * as z from 'zod'
import { SignInSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

export default function LoginForm() {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  return (
    <CardWrapper
      SignUpButtonLabel="Don't have an account? Sign Up"
      SignUpButtonHref={`/${useLocale()}/sign-up`}
      showSocial={true}
    >
      <Form {...form}>
        <form className='space-y-5' onSubmit={form.handleSubmit(() => {})}>
          <div className='space-y-5'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='sophie@example.com'
                      type='email'
                      className='bg-[#F4F4F4] rounded-none border-[0.05rem] border-solid border-[#bfbdc050] hover:bg-[#bfbdc050] focus:bg-[#bfbdc050] text-[#1d0f0f] placeholder:text-[#1d0f0f]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Password'
                      type='password'
                      className='bg-[#F4F4F4] rounded-none border-[0.05rem] border-solid border-[#bfbdc050] hover:bg-[#bfbdc050] focus:bg-[#bfbdc050] text-[#1d0f0f] placeholder:text-[#1d0f0f]'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type='submit'
            className='w-full rounded-full bg-[#453C41] hover:bg-stone-800'
          >
            Continue
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
