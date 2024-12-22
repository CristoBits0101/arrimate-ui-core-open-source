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

// Fieldset
import ProfileFormFieldset from '@/modules/configuration/components/fieldsets/profile-form-fieldset'

// Forms
import { FormProvider } from 'react-hook-form'

// Inputs
import NameInput from '@/modules/configuration/components/inputs/name-input'
import PhoneInput from '@/modules/configuration/components/inputs/phone-input'
import EmailInput from '@/modules/configuration/components/inputs/email-input'
import PasswordInput from '@/modules/configuration/components/inputs/password-input'
import InterestsInput from '@/modules/configuration/components/inputs/interests-input'
import SloganInput from '@/modules/configuration/components/inputs/slogan-input'
import OccupationInput from '@/modules/configuration/components/inputs/occupation-input'
import BirthdateInput from '@/modules/configuration/components/inputs/birthdate-input'
import ZipCodeInput from '@/modules/configuration/components/inputs/zip-code-input'
import CountryInput from '@/modules/configuration/components/inputs/country-input'
import CityInput from '@/modules/configuration/components/inputs/city-input'

// Intl
import { useTranslations } from 'next-intl'

// Shadcn
import { Form } from '@/modules/ui/form'

export default function ProfileForm() {
  const f = useTranslations('ProfileForm')
  const t = useTranslations('Button')
  const { form, error, success, isPending, hydrated, onSubmit } =
    useProfileForm()
  return hydrated ? (
    <CardWrapper>
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-8 mt-8'>
              {/* Identity */}
              <ProfileFormFieldset legend={f('identity')}>
                <NameInput name='name' isPending={isPending} />
                <BirthdateInput name='birthdate' isPending={isPending} />
              </ProfileFormFieldset>
              {/* Credentials */}
              <ProfileFormFieldset legend={f('credentials')}>
                <PhoneInput
                  phonePrefixName='prefix'
                  phoneNumberName='number'
                  isPending={isPending}
                />
                <EmailInput name='email' isPending={isPending} />
                <PasswordInput name='password' isPending={isPending} />
              </ProfileFormFieldset>
              {/* Location */}
              <ProfileFormFieldset legend={f('location')}>
                <CountryInput name='country' isPending={isPending} />
                <ZipCodeInput name='zipCode' isPending={isPending} />
                <CityInput name='city' isPending={isPending} />
              </ProfileFormFieldset>
              {/* Vocation */}
              <ProfileFormFieldset legend={f('vocation')}>
                <OccupationInput name='profession' isPending={isPending} />
                <InterestsInput name='interests' isPending={isPending} />
                <SloganInput name='slogan' isPending={isPending} />
              </ProfileFormFieldset>
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
