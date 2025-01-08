'use client'

// Actions: Encapsulates backend logic
import newPasswordAction from '@/modules/auth/new-password/actions/new-password-action'

// Alerts: Serialize backend messages
import FormError from '@/modules/auth/status-alerts/error-alert'
import FormSuccess from '@/modules/auth/status-alerts/success-alert'

// Buttons: Button to send form
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards: Card to wrap inputs
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Form: Manage form status and validation
import { useForm, FormProvider } from 'react-hook-form'

// Inputs: Fillable fields in forms
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Intl: To get language and set translations
import { useLocale, useTranslations } from 'next-intl'

// Navigation: To get URL parameter
import { useSearchParams } from 'next/navigation'

// React: Hooks from React
import { useEffect, useState, useTransition } from 'react'

// Shadcn
import { Form } from '@/modules/ui/form'

// Zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewPasswordSchema } from '@/modules/auth/new-password/schemas'

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
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

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
