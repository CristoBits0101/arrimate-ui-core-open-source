'use client'

// Alerts: Serialize backend messages
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons: Button to send form
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards: Card to wrap inputs
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Custom: Encapsulates form logic
import { useSignInForm } from '@/modules/auth/hooks/useSignInForm'

// Form: Hooks from React
import { FormProvider } from 'react-hook-form'

// Inputs: Fillable fields in forms
import EmailInput from '@/modules/auth/components/inputs/email-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Intl: To get language and set translations
import { useLocale, useTranslations } from 'next-intl'

// Shadcn: Contains the form component
import { Form } from '@/modules/ui/form'

/**
 * Component: SignInForm
 *
 * 1. Renders the sign-in form
 * 2. Handles validation, submission, and rendering
 * 3. Displays success/error messages
 */
export default function SignInForm() {
  // Get locale and translations
  const locale = useLocale()
  const f = useTranslations('Forms')
  const b = useTranslations('Button')
  const m = useTranslations('Mail')
  const s = m('confirm')

  // Use hook to manage form logic
  const { form, error, success, isPending, hydrated, onSubmit } =
    useSignInForm(s)

  // Render the hydrated form on the frontend
  return hydrated ? (
    // Wrapper for the card layout
    <CardWrapper
      pageNameRedirect={f('signInForm.pageNameRedirect')}
      redirectButtonLabel={f('signInForm.redirectButtonLabel')}
      redirectButtonHref={`/${locale}/sign-up`}
      showSocial={true}
      showForgotPassword={true}
      showDividingLine={true}
    >
      {/* Form provider for React Hook Form */}
      <FormProvider {...form}>
        {/* Extend structure for Shadcn form */}
        <Form {...form}>
          {/* Form element */}
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              {/* Email input */}
              <EmailInput name='email' isPending={isPending} />
              {/* Password input */}
              <PasswordInput name='password' isPending={isPending} />
            </div>
            {/* Display errors */}
            <FormError message={error} />
            {/* Display success */}
            <FormSuccess message={success} />
            {/* Submit button */}
            <SubmitButton message={b('SignIn')} isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
