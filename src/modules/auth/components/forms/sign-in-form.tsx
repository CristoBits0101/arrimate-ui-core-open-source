'use client'

// Actions
import SignIn from '@/modules/auth/actions/sign-in'

// Alerts
import FormError from '@/components/auth/alerts/alert-errors'
import FormSuccess from '@/components/auth/alerts/alert-success'

// Buttons
import SubmitButton from '@/components/auth/buttons/send/submit-form-button'

// Cards
import CardWrapper from '@/components/auth/cards/card-wrapper'

// Inputs
import EmailInput from '@/components/auth/inputs/email-input'
import PasswordInput from '@/components/auth/inputs/password-input'

// Next
import { useLocale } from 'next-intl'

// React
import { useForm, FormProvider } from 'react-hook-form'
import { useState, useTransition } from 'react'

// Shadcn
import { Form } from '@/components/ui/form'

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
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    // Reset values
    setError('')
    setSuccess('')

    // Enviar datos al servidor
    startTransition(() => {
      SignIn(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((err) => {
          console.error('Error en SignIn:', err)
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
