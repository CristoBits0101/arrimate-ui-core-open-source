'use client'

// Actions
import SignIn from '@/modules/auth/actions/sign-in'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Inputs
import EmailInput from '@/modules/auth/components/inputs/email-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Next
import { useLocale } from 'next-intl'

// React
import { useForm, FormProvider } from 'react-hook-form'
import { useState, useTransition } from 'react'

// Shadcn
import { Form } from '@/modules/ui/form'

// Zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInSchema } from '@/modules/auth/schemas'

export default function SignInForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    // Reset values
    setError('')
    setSuccess('')
    // Sent data to server
    startTransition(() => {
      SignIn(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((error) => {
          console.error('Error en SignIn:', error)
          setError('Ocurrió un error inesperado.')
        })
    })
  }

  return (
    <CardWrapper
      pageNameRedirect='Sign Up'
      redirectButtonLabel="Don't have an account? "
      redirectButtonHref={`/${useLocale()}/sign-up`}
      showSocial={true}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <EmailInput name='email' isPending={isPending} />
              <PasswordInput name='password' isPending={isPending} />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton message='Sign In' isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  )
}
