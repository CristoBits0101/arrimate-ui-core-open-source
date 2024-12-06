'use client'

// Alerts: Serialize backend messages
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons: Button to send form
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards: Card to wrap inputs
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Custom: Encapsulates form logic
import { useSignUpForm } from '@/modules/auth/hooks/useSignUpForm'

// Form: Hooks from React
import { FormProvider } from 'react-hook-form'

// Inputs: Fillable fields in forms
import EmailInput from '@/modules/auth/components/inputs/email-input'
import NameInput from '@/modules/auth/components/inputs/name-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Intl: To get language and set translations
import { useLocale, useTranslations } from 'next-intl'

// Shadcn: Contains the form component
import { Form } from '@/modules/ui/form'

export default function SignUpForm(): React.ReactElement | null {
  // Get locale
  const locale = useLocale()

  // Get translations
  const b = useTranslations('Button')
  const f = useTranslations('Forms')
  const m = useTranslations('Mail')
  const s = m('confirm')

  // Managing form logic
  const { form, error, success, isPending, hydrated, onSubmit } = useSignUpForm(locale, s)

  // Render the form if the component has hydrated
  return hydrated ? (
    <CardWrapper
      pageNameRedirect={f('signUpForm.pageNameRedirect')}
      redirectButtonLabel={f('signUpForm.redirectButtonLabel')}
      redirectButtonHref={`/${locale}/sign-in`}
      showSocial={true}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <NameInput name='name' isPending={isPending} />
              <EmailInput name='email' isPending={isPending} />
              <PasswordInput name='password' isPending={isPending} />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton message={b('SignUp')} isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
