'use client'

// Actions
import resetPasswordAction from '@/modules/auth/actions/reset-password-action'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Inputs
import EmailInput from '@/modules/auth/components/inputs/email-input'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// React
import React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { useState, useTransition } from 'react'

// Shadcn
import { Form } from '@/modules/ui/form'

// Zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ResetPasswordSchema } from '@/modules/auth/schemas'

export default function ResetPasswordForm() {
  // States
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  // Navigation
  const locale = useLocale()

  // Translations
  const f = useTranslations('Forms')

  // Initializes the form and manages its state when rendering
  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = (values: z.infer<typeof ResetPasswordSchema>) => {
    // Reset values
    setError('')
    setSuccess('')
    // Sent data to server
    startTransition(() => {
      resetPasswordAction(values)
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
      redirectButtonLabel={f('resetPasswordForm.redirectButtonLabel')}
      redirectButtonHref={`/${locale}/sign-up`}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <EmailInput name='email' isPending={isPending} />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton message={f('resetPasswordForm.recoveryButton')} isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
