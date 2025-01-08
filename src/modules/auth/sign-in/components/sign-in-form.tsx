'use client'

// Alerts: Serialize backend messages
import FormError from '@/modules/auth/status-alerts/error-alert'
import FormSuccess from '@/modules/auth/status-alerts/success-alert'

// Buttons: Button to send form
import SubmitButton from '@/modules/ui/buttons/submit-form-button'

// Cards: Card to wrap inputs
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Custom: Encapsulates form logic
import { useSignInForm } from '@/modules/auth/sign-in/hooks/useSignIn'

// Form: Hooks from React
import { FormProvider } from 'react-hook-form'

// Inputs: Fillable fields in forms
import EmailInput from '@/modules/ui/inputs/email-input'
import PasswordInput from '@/modules/ui/inputs/password-input'

// Intl: To get language and set translations
import { useLocale, useTranslations } from 'next-intl'

// Shadcn: Contains the form component
import { Form } from '@/modules/ui/form'

export default function SignInForm(): React.ReactElement | null {
  // Get locale
  const locale = useLocale()

  // Get translations
  const b = useTranslations('Button')
  const f = useTranslations('Forms')
  const m = useTranslations('Mail')
  const s = m('confirm')

  // Managing form logic
  const { form, error, success, isPending, hydrated, onSubmit } =
    useSignInForm(s)

  // Render the form on the frontend
  return hydrated ? (
    // Content that is rendered
    <CardWrapper
      pageNameRedirect={f('signInForm.pageNameRedirect')}
      redirectButtonLabel={f('signInForm.redirectButtonLabel')}
      redirectButtonHref={`/${locale}/sign-up`}
      showSocial={true}
      showForgotPassword={true}
      showDividingLine={true}
    >
      {/* Form structure provider */}
      <FormProvider {...form}>
        {/* Extend structure for Shadcn form */}
        <Form {...form}>
          {/* Form */}
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              {/* Inputs */}
              <EmailInput name='email' isPending={isPending} />
              <PasswordInput name='password' isPending={isPending} />
            </div>
            {/* Show errors */}
            <FormError message={error} />
            {/* Show success */}
            <FormSuccess message={success} />
            {/* Submit button */}
            <SubmitButton message={b('signIn')} isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
