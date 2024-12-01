'use client'

// Actions
import SignInAction from '@/modules/auth/actions/sign-in-action'

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

// Intl
import { useLocale, useTranslations } from 'next-intl'

// Navigation
import { useSearchParams } from 'next/navigation'

// React
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useState, useTransition } from 'react'

// Shadcn
import { Form } from '@/modules/ui/form'

// Zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInSchema } from '@/modules/auth/schemas'

export default function SignInForm() {
  // States
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  // Navigation
  const locale = useLocale()
  const searchParams = useSearchParams()
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email in use.'
      : ''

  // Translations
  const f = useTranslations('Forms')
  const m = useTranslations('Mail.subject')
  const subject = m('subject')
  const b = useTranslations('Button')

  // Initializes the form and manages its state when rendering
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
      SignInAction(values, subject ?? 'Confirm your registration on Arrímate')
        .then((data) => {
          setError(data?.error)
          setSuccess(data?.success)
          if (data.success) window.location.href = `/${locale}`
        })
        .catch((error) => {
          console.error('Error en SignIn:', error)
          setError('Ocurrió un error inesperado.')
        })
    })
  }

  // Ensure client-side rendering
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => setHydrated(true), [])

  return hydrated ? (
    <CardWrapper
      pageNameRedirect={f('signInForm.pageNameRedirect')}
      redirectButtonLabel={f('signInForm.redirectButtonLabel')}
      redirectButtonHref={`/${locale}/sign-up`}
      showSocial={true}
      showForgotPassword={true}
      showDividingLine={true}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <EmailInput name='email' isPending={isPending} />
              <PasswordInput name='password' isPending={isPending} />
            </div>
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <SubmitButton message={b('SignIn')} isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
