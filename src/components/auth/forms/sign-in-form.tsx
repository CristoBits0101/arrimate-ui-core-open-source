// Statuses and effects are managed from the client.
'use client'

// components
import CardWrapper from '@/components/auth/cards/card-wrapper'

// react-hook-form
import { useForm } from 'react-hook-form'

// next-intl
import { useLocale } from 'next-intl'

// shadcn/ui
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
      password: ''
    }
  })
  return (
    <CardWrapper
      headerLabel="Welcome back"
      SignUpButtonLabel="Don't have an account? Sign Up"
      SignUpButtonHref={`/${useLocale()}/sign-up`}
      showSocial={true}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="sophie@example.com"
                      type="email"
                      className="bg-[#F4F4F4]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Password"
                      type="password"
                      className="bg-[#F4F4F4]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </CardWrapper>
  )
}
