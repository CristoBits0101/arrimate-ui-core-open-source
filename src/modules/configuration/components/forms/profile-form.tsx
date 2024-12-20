'use client'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards
import CardWrapper from '@/modules/configuration/cards/card-wrapper'

// Customized
import { useSignInForm } from '@/modules/auth/hooks/useSignInForm'

// Forms
import { FormProvider } from 'react-hook-form'

// Inputs
import NameInput from '@/modules/auth/components/inputs/name-input'
import EmailInput from '@/modules/auth/components/inputs/email-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Shadcn
import { Form } from '@/modules/ui/form'

export default function ProfileForm() {
  const t = useTranslations('Button')
  return (
    <CardWrapper>
      <FormProvider {...form}>
        <Form {...form}>
          <div className='space-y-5'>
            <NameInput name='name' isPending={isPending} />
            <EmailInput name='email' isPending={isPending} />
            <PasswordInput name='password' isPending={isPending} />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <SubmitButton message={t('save')} isPending={isPending} />
        </Form>
      </FormProvider>
    </CardWrapper>
  )
}
