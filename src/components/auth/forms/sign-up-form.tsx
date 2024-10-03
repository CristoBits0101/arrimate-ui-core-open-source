'use client'

import * as z from 'zod'
import { SignInSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useState, useTransition } from 'react'
import { useLocale } from 'next-intl'
import SignIn from '@/actions/sign-in'

// Components
import CardWrapper from '@/components/auth/cards/card-wrapper'
import EmailInput from '@/components/auth/inputs/email-input'
import PasswordInput from '@/components/auth/inputs/password-input'
import FormError from '@/components/auth/alerts/form-error'
import FormSuccess from '@/components/auth/alerts/form-success'
import SignInSubmit from '../buttons/sign-in-submit'

// Shadcn/UI
import { Form } from '@/components/ui/form'

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
      signUpButtonLabel="Don't have an account? "
      signUpButtonHref={`/${useLocale()}/sign-up`}
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
            <SignInSubmit message='Continue' isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  )
}
