'use client'

// Alerts
import FormError from '@/modules/auth/components/alerts/error-alert'
import FormSuccess from '@/modules/auth/components/alerts/success-alert'

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
import AddressInput from '@/modules/configuration/components/inputs/address-input'
import BirthdateInput from '@/modules/configuration/components/inputs/birthdate-input'
import CityInput from '@/modules/configuration/components/inputs/city-input'
import CountryInput from '@/modules/configuration/components/inputs/country-input'
import EmailInput from '@/modules/configuration/components/inputs/email-input'
import GenderInput from '@/modules/configuration/components/inputs/gender-input'
import InterestsInput from '@/modules/configuration/components/inputs/interests-input'
import NameInput from '@/modules/configuration/components/inputs/name-input'
import NewPasswordInput from '@/modules/configuration/components/inputs/new-password-input'
import NicknameInput from '@/modules/configuration/components/inputs/nickname-input'
import OccupationInput from '@/modules/configuration/components/inputs/occupation-input'
import PasswordInput from '@/modules/configuration/components/inputs/password-input'
import PhoneNumberInput from '@/modules/configuration/components/inputs/phone-number-input'
import PhonePrefixInput from '@/modules/configuration/components/inputs/phone-prefix-input'
import PortfolioInput from '@/modules/configuration/components/inputs/portfolio-input'
import SloganInput from '@/modules/configuration/components/inputs/slogan-input'
import ZipCodeInput from '@/modules/configuration/components/inputs/zip-code-input'

// Intl
import { useTranslations } from 'next-intl'

// React
import { useEffect, useState } from 'react'

// Shadcn
import { Form } from '@/modules/ui/form'

export default function ProfileForm() {
  // Translations
  const f = useTranslations('ProfileForm')
  const t = useTranslations('Button')

  // Custom hook
  const { form, error, success, isPending, hydrated, onSubmit } = useProfileForm()

  // Predictions state
  const [predictions, setPredictions] = useState<PlaceAutocompleteResult[]>([])

  // Confirmation state
  const [country, setCountry] = useState<string>('')
  const [city, setCity] = useState<string>('')

  // Value predictions
  const [value, setValue] = useState<string>('')

  // Fetch predictions useEffect
  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const results = await autocomplete(value)
        setPredictions(results)
      } catch (error) {
        console.error('Error fetching predictions: ', error)
      }
    }
    fetchPredictions()
  }, [value])

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
                <ZipCodeInput
                  predictions={predictions}
                  setValue={setValue}
                  name='zipCode'
                  isPending={isPending}
                  setCountry={setCountry}
                  setCity={setCity}
                />
                <CountryInput
                  country={country}
                  name='country'
                  isPending={isPending}
                />
                <CityInput city={city} name='city' isPending={isPending} />
                <AddressInput name='address' isPending={isPending} />
              </ProfileFormFieldsetCols4>
              {/* Vocation */}
              <ProfileFormFieldsetCols4 legend={f('vocation')}>
                <OccupationInput name='occupation' isPending={isPending} />
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
