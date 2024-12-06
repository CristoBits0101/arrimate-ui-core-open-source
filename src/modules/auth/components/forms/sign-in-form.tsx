'use client'

// Actions: Encapsulates backend logic
import signInAction from '@/modules/auth/actions/sign-in-action'

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
  const m = useTranslations('Mail')
  const subject = m('confirm')
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
      signInAction(values, subject ?? 'registration')
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
