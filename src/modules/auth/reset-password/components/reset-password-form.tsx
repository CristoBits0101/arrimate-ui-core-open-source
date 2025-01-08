'use client'

// Alerts: Serialize backend messages
import FormError from '@/modules/ui/alerts/error-alert'
import FormSuccess from '@/modules/ui/alerts/success-alert'

// Buttons: Button to send form
import SubmitButton from '@/modules/auth/form-pieces/buttons/submit-form-button'

// Cards: Card to wrap inputs
import CardWrapper from '@/modules/auth/form-pieces/cards/card-wrapper'

// Form: Hook form provider
import { FormProvider } from 'react-hook-form'

// Hook: Encapsulates reset password logic
import { useResetPassword } from '@/modules/auth/reset-password/hooks/useResetPassword'

// Inputs: Fillable fields in forms
import EmailInput from '@/modules/auth/form-pieces/inputs/email-input'

// Shadcn: Contains the form component
import { Form } from '@/modules/ui/form'

export default function ResetPasswordForm() {
  // Hook: Destructure reset password logic
  const { form, error, success, isPending, hydrated, f, onSubmit, locale } =
    useResetPassword()

  // Render: Display form only after hydration
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
