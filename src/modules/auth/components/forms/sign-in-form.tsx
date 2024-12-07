'use client'

// Hooks and components
import { useSignInForm } from '@/modules/auth/hooks/useSignInForm'
import { FormProvider } from 'react-hook-form'
import { useLocale, useTranslations } from 'next-intl'
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'
import EmailInput from '@/modules/auth/components/inputs/email-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'
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
            <SubmitButton message={b('SignIn')} isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
