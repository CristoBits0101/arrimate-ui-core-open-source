'use client'

// Actions
import SignIn from '@/actions/sign-in'

// Alerts
import FormError from '@/components/auth/alerts/form-error'
import FormSuccess from '@/components/auth/alerts/form-success'

// Buttons
import SubmitButton from '@/components/auth/buttons/submit-button'

// Cards
import CardWrapper from '@/components/auth/cards/card-wrapper'

// Inputs
import EmailInput from '@/components/auth/inputs/email-input'
import NameInput from '@/components/auth/inputs/name-input'
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
import { SignUpSchema } from '@/schemas'

export default function SignUpForm() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
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
        .catch((err) => {
          console.error('Error en SignIn:', err)
          setError('Ocurrió un error inesperado.')
        })
    })
  }

  return (
    <CardWrapper
      pageNameRedirect='Sign In'
      signUpButtonLabel='Already have an account? '
      signUpButtonHref={`/${useLocale()}/sign-in`}
      showSocial={true}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <NameInput isPending={isPending} />
              <EmailInput name='email' isPending={isPending} />
              <PasswordInput name='password' isPending={isPending} />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton message='Sign Up' isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  )
}
