'use client'

// Actions
import newPasswordAction from '@/modules/auth/actions/new-password-action'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Inputs
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
import { NewPasswordSchema } from '@/modules/auth/schemas'

export default function NewPasswordForm() {
  // States
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  // Navigation
  const locale = useLocale()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  // Translations
  const f = useTranslations('Forms')

  // Initializes the form and manages its state when rendering
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    mode: 'onSubmit',
    defaultValues: {
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    // Change values
    setError('')
    setSuccess('')
    // Sent data to server
    startTransition(() => {
      newPasswordAction(values, token)
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
      pageNameRedirect={f('newPasswordSchema.pageNameRedirect')}
      redirectButtonHref={`/${locale}/sign-in`}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <PasswordInput name='password' isPending={isPending} />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton
              message={f('newPasswordSchema.changeButton')}
              isPending={isPending}
            />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
