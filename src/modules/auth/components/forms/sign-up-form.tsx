'use client'

// Actions: Encapsulates logic to interact with the backend
import SignUpAction from '@/modules/auth/actions/sign-up-action'

// Alerts: Show error or success messages to the user
import FormError from '@/modules/auth/components/alerts/alert-errors'
import FormSuccess from '@/modules/auth/components/alerts/alert-success'

// Buttons: Button to send the form
import SubmitButton from '@/modules/auth/components/buttons/submit/submit-form-button'

// Cards: Contains the design of the form
import CardWrapper from '@/modules/auth/components/cards/card-wrapper'

// Inputs: Input fields optimized for reusability and control
import EmailInput from '@/modules/auth/components/inputs/email-input'
import NameInput from '@/modules/auth/components/inputs/name-input'
import PasswordInput from '@/modules/auth/components/inputs/password-input'

// Next: To get the client language
import { useLocale, useTranslations } from 'next-intl'

// React: Hooks from React
import React from 'react'
import { useState, useTransition } from 'react'

// Form: Makes it easy to manage form status and validation
import { useForm, FormProvider } from 'react-hook-form'

// Shadcn: Contains the form component
import { Form } from '@/modules/ui/form'

// Zod: Define data validation rules
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignUpSchema } from '@/modules/auth/schemas'

export default function SignUpForm() {
  const f = useTranslations('Forms')
  const m = useTranslations('Mail.subject')
  const subject = m('subject')
  const b = useTranslations('Button')
  const locale = useLocale()

  // Receive messages indicating the outcome of the form submission
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  // Manage asynchronous operations
  const [isPending, startTransition] = useTransition()

  // Initializes the form and manages its state when rendering
  const form = useForm<z.infer<typeof SignUpSchema>>({
    // This validates the form data every time it is submitted
    resolver: zodResolver(SignUpSchema),
    mode: 'onSubmit',
    // Sets the default values for the form fields before any user interaction
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

  // The form values are initialized with data validated by the schema
  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    // Reset the error and success messages before attempting submission
    setError('')
    setSuccess('')
    // Send the form data to the server asynchronously
    startTransition(() => {
      // Calls the SignUp action with the submitted form values
      SignUpAction(values, subject ?? 'Confirm your registration on Arrímate')
        .then((data) => {
          // Set the error message if the server returns one
          setError(data.error)
          // Set the success message if the server confirms success
          setSuccess(data.success)
        })
        .catch((err) => {
          // Handle unexpected errors during submission
          console.error('Error in SignUp:', err)
          // Display a generic error message
          setError('An unexpected error occurred.')
        })
    })
  }

  // Ensure client-side rendering
  const [hydrated, setHydrated] = React.useState(false)
  React.useEffect(() => setHydrated(true), [])

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
