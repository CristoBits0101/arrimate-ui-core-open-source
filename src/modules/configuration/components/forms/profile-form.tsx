'use client'

// Alerts
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons
import SubmitButton from '@/modules/configuration/components/buttons/submit-button'

// Cards
import CardWrapper from '@/modules/configuration/components/cards/card-wrapper'

// Customized
import { useProfileForm } from '@/modules/configuration/hooks/forms/useProfileForm'

// Forms
import { FormProvider } from 'react-hook-form'

// Inputs
import NameInput from '@/modules/configuration/components/inputs/name-input'
import PhoneInput from '@/modules/configuration/components/inputs/phone-input'
import EmailInput from '@/modules/configuration/components/inputs/email-input'
import PasswordInput from '@/modules/configuration/components/inputs/password-input'
import InterestsInput from '@/modules/configuration/components/inputs/interests-input'
import SloganInput from '@/modules/configuration/components/inputs/slogan-input'
import ProfessionInput from '@/modules/configuration/components/inputs/profession-input'
import BirthdateInput from '@/modules/configuration/components/inputs/birthdate-input'

// Intl
import { useTranslations } from 'next-intl'

// Shadcn
import { Form } from '@/modules/ui/form'

export default function ProfileForm() {
  const f = useTranslations('ProfileForm')
  const t = useTranslations('Button')
  // Managing form logic
  const { form, error, success, isPending, hydrated, onSubmit } =
    useProfileForm()
  return hydrated ? (
    <CardWrapper>
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-8 mt-8'>
              {/*  */}
              <div className='w-full h-fit'>
                <h2 className='w-full text-lg font-medium mb-2'>
                  {f('identity')}
                </h2>
                <div className='w-full h-fit grid grid-cols-[1fr,1fr,1fr] gap-4'>
                  <NameInput name='name' isPending={isPending} />
                  <BirthdateInput name='birthdate' isPending={isPending} />
                </div>
              </div>
              {/* Credentials */}
              <div className='w-full h-fit'>
                <h2 className='w-full text-lg font-medium mb-2'>
                  {f('credentials')}
                </h2>
                <div className='w-full h-fit grid grid-cols-[1fr,1fr,1fr] gap-4'>
                  <PhoneInput
                    phonePrefixName='prefix'
                    phoneNumberName='number'
                    isPending={isPending}
                  />
                  <EmailInput name='email' isPending={isPending} />
                  <PasswordInput name='password' isPending={isPending} />
                </div>
              </div>
              {/* Vocation */}
              <div className='w-full h-fit'>
                <h2 className='w-full text-lg font-medium mb-2'>
                  {f('vocation')}
                </h2>
                <div className='w-full h-fit grid grid-cols-[1fr,1fr,1fr] gap-4'>
                  <ProfessionInput name='profession' isPending={isPending} />
                  <InterestsInput name='password' isPending={isPending} />
                  <SloganInput name='password' isPending={isPending} />
                </div>
              </div>
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <div className='w-full h-fit flex justify-end'>
              <SubmitButton message={t('save')} isPending={isPending} />
            </div>
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
