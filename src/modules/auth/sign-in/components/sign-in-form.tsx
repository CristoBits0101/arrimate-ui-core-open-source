'use client'

// Alerts
import FormError from '@/modules/auth/form-pieces/alerts/error-alert'
import FormSuccess from '@/modules/auth/form-pieces/alerts/success-alert'

// Buttons
import SubmitButton from '@/modules/auth/form-pieces/buttons/submit-form-button'

// Cards
import CardWrapper from '@/modules/auth/form-pieces/cards/card-wrapper'

// Form
import { FormProvider } from 'react-hook-form'

// Hooks
import { useSignInForm } from '@/modules/auth/sign-in/hooks/useSignIn'

// Inputs
import EmailInput from '@/modules/auth/form-pieces/inputs/email-input'
import PasswordInput from '@/modules/auth/form-pieces/inputs/password-input'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// Shadcn
import { Form } from '@/modules/ui/form'

export default function SignInForm(): React.ReactElement | null {
  // Hooks
  const { form, error, success, isPending, hydrated, onSubmit } = useSignInForm()

  // Locale
  const locale = useLocale()

  // Translations
  const b = useTranslations('Button')
  const f = useTranslations('Forms')

  // Hydration
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
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton message={b('signIn')} isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
