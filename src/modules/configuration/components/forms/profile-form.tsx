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
import NameInput from '@/modules/auth/components/inputs/name-input'
import EmailInput from '@/modules/auth/components/inputs/email-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Intl: To get language and set translations
import { useLocale, useTranslations } from 'next-intl'

// Shadcn: Contains the form component
import { Form } from '@/modules/ui/form'

export default function ProfileForm() {
  return (
    <FormProvider {...form}>
      <Form {...form}>
        <div className='space-y-5'>
          <NameInput name='name' isPending={isPending} />
          <EmailInput name='email' isPending={isPending} />
          <PasswordInput name='password' isPending={isPending} />
        </div>
      </Form>
    </FormProvider>
  )
}
