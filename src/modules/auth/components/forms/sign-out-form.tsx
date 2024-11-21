'use client'

// Actions
import signOutAction from '@/modules/auth/actions/sign-out-action'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// React
import React, { useState, useTransition } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

// Shadcn
import { Form } from '@/modules/ui/form'

export default function SignOut() {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const t = useTranslations('Button')

  // Initializes the form and manages its state when rendering
  const form = useForm({
    mode: 'onSubmit'
  })

  const onSubmit = () => {
    // Reset states
    setError('')
    setSuccess('')
    // Sent data to server
    startTransition(() => {
      signOutAction()
        .then((result) => {
          if (result.success) {
            setSuccess('Sesión cerrada exitosamente.')
            window.location.href = `/${locale}/sign-in`
          } else setError(result.error || 'Ocurrió un error al cerrar sesión.')
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error)
          setError('Ocurrió un error inesperado.')
        })
    })
  }

  // Ensure client-side rendering
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => setHydrated(true), [])

  return hydrated ? (
    <FormProvider {...form}>
      <Form {...form}>
        <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
          <FormError message={error} />
          <FormSuccess message={success} />
          <SubmitButton message={t('SignOut')} isPending={isPending} />
        </form>
      </Form>
    </FormProvider>
  ) : null
}
