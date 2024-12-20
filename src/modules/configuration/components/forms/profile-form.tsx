'use client'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards
import CardWrapper from '@/modules/configuration/components/cards/card-wrapper'

// Customized
import { useProfileForm } from '@/modules/configuration/hooks/forms/useProfileForm'

// Forms
import { FormProvider } from 'react-hook-form'

// Inputs
import NameInput from '@/modules/auth/components/inputs/name-input'
import EmailInput from '@/modules/auth/components/inputs/email-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Intl
import { useTranslations } from 'next-intl'

// Shadcn
import { Form } from '@/modules/ui/form'

export default function ProfileForm() {
  const t = useTranslations('Button')
  // Managing form logic
  const { form, error, success, isPending, hydrated, onSubmit } =
    useProfileForm()
  return hydrated ? (
    <CardWrapper>
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-8 mt-3'>
              {/*  */}
              <div className='w-full h-fit grid grid-cols-[1fr,1fr] gap-8'>
                <NameInput name='name' isPending={isPending} />
              </div>
              {/*  */}
              <div className='w-full h-fit'>
                <h2 className='w-full text-lg font-medium mb-2'>Hola</h2>
                <div className='w-full h-fit grid grid-cols-[1fr,1fr] gap-8'>
                  <EmailInput name='email' isPending={isPending} />
                  <EmailInput name='email' isPending={isPending} />
                </div>
              </div>
              {/*  */}
              <div className='w-full h-fit'>
                <h2 className='w-full text-lg font-medium mb-2'>Hola</h2>
                <div className='w-full h-fit grid grid-cols-[1fr,1fr] gap-8'>
                  <PasswordInput name='password' isPending={isPending} />
                  <PasswordInput name='password' isPending={isPending} />
                </div>
              </div>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton message={t('save')} isPending={isPending} />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
