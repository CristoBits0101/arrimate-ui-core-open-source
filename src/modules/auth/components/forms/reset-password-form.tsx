'use client'

// Actions: Encapsulates backend logic
import resetPasswordAction from '@/modules/auth/actions/reset-password-action'

// Alerts: Serialize backend messages
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons: Button to send form
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards: Card to wrap inputs
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Form: Manage form status and validation
import { useForm, FormProvider } from 'react-hook-form'

// Inputs: Fillable fields in forms
import EmailInput from '@/modules/auth/components/inputs/email-input'

// Intl: To get language and set translations
import { useLocale, useTranslations } from 'next-intl'

// React: Hooks from React
import { useEffect, useState, useTransition } from 'react'

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
  const m = useTranslations('Mail')
  const subject = m('subject')

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
      resetPasswordAction(values, subject ?? 'reset')
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
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  return hydrated ? (
    <CardWrapper
      pageNameRedirect={f('resetPasswordForm.pageNameRedirect')}
      redirectButtonHref={`/${locale}/sign-in`}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <EmailInput name='email' isPending={isPending} />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton
              message={f('resetPasswordForm.recoveryButton')}
              isPending={isPending}
            />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
