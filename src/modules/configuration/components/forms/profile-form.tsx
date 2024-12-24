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
import ProfileFormFieldsetCols4 from '@/modules/configuration/components/fieldsets/profile-form-fieldset-cols-4'

// Forms
import { FormProvider } from 'react-hook-form'

// Google
import autocomplete from '@/modules/configuration/lib/google-maps'
import { PlaceAutocompleteResult } from '@googlemaps/google-maps-services-js'

// Inputs
import NameInput from '@/modules/configuration/components/inputs/name-input'
import PhonePrefixInput from '@/modules/configuration/components/inputs/phone-prefix-input'
import PhoneNumberInput from '@/modules/configuration/components/inputs/phone-number-input'
import EmailInput from '@/modules/configuration/components/inputs/email-input'
import PasswordInput from '@/modules/configuration/components/inputs/password-input'
import NewPasswordInput from '@/modules/configuration/components/inputs/new-password-input'
import InterestsInput from '@/modules/configuration/components/inputs/interests-input'
import SloganInput from '@/modules/configuration/components/inputs/slogan-input'
import OccupationInput from '@/modules/configuration/components/inputs/occupation-input'
import BirthdateInput from '@/modules/configuration/components/inputs/birthdate-input'
import ZipCodeInput from '@/modules/configuration/components/inputs/zip-code-input'
import CountryInput from '@/modules/configuration/components/inputs/country-input'
import CityInput from '@/modules/configuration/components/inputs/city-input'
import NicknameInput from '@/modules/configuration/components/inputs/nickname-input'
import GenderInput from '@/modules/configuration/components/inputs/gender-input'
import AddressInput from '@/modules/configuration/components/inputs/address-input'
import PortfolioInput from '@/modules/configuration/components/inputs/portfolio-input'

// Intl
import { useTranslations } from 'next-intl'

// React
import { useEffect, useState } from 'react'

// Shadcn
import { Form } from '@/modules/ui/form'

export default function ProfileForm() {
  const f = useTranslations('ProfileForm')
  const t = useTranslations('Button')
  const { form, error, success, isPending, hydrated, onSubmit } =
    useProfileForm()
  const [predictions, setPredictions] = useState<PlaceAutocompleteResult[]>([])
  const [input, setInput] = useState('')

  useEffect(() => {
    const fetchPredictions = async () => {
      const predictions = await autocomplete(input)
      if (predictions) setPredictions(predictions ?? [])
    }
    fetchPredictions()
    alert(predictions)
  }, [input, predictions])

  return hydrated ? (
    <CardWrapper>
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-8' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-8 mt-8'>
              {/* Identity */}
              <ProfileFormFieldsetCols4 legend={f('identity')}>
                <NameInput name='name' isPending={isPending} />
                <NicknameInput name='nickname' isPending={isPending} />
                <GenderInput name='gender' isPending={isPending} />
                <BirthdateInput name='birthdate' isPending={isPending} />
              </ProfileFormFieldsetCols4>
              {/* Credentials */}
              <ProfileFormFieldsetCols4 legend={f('credentials')}>
                <div className='grid w-full h-fit grid-cols-[1fr,1fr] gap-2'>
                  <PhonePrefixInput name='prefix' isPending={isPending} />
                  <PhoneNumberInput name='number' isPending={isPending} />
                </div>
                <EmailInput name='email' isPending={isPending} />
                <PasswordInput name='password' isPending={isPending} />
                <NewPasswordInput name='newPassword' isPending={isPending} />
              </ProfileFormFieldsetCols4>
              {/* Location */}
              <ProfileFormFieldsetCols4 legend={f('location')}>
                <CountryInput
                  value='input'
                  onValueChange={setInput}
                  name='country'
                  isPending={isPending}
                />
                <ZipCodeInput
                  value='input'
                  onValueChange={setInput}
                  name='zipCode'
                  isPending={isPending}
                />
                <CityInput
                  value='input'
                  onValueChange={setInput}
                  name='city'
                  isPending={isPending}
                />
                <AddressInput
                  value='input'
                  onValueChange={setInput}
                  name='address'
                  isPending={isPending}
                />
              </ProfileFormFieldsetCols4>
              {/* Vocation */}
              <ProfileFormFieldsetCols4 legend={f('vocation')}>
                <OccupationInput name='profession' isPending={isPending} />
                <InterestsInput name='interests' isPending={isPending} />
                <SloganInput name='slogan' isPending={isPending} />
                <PortfolioInput name='portfolio' isPending={isPending} />
              </ProfileFormFieldsetCols4>
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
