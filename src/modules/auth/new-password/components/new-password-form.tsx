'use client'

// Alerts
import FormError from '@/modules/auth/form-pieces/alerts/error-alert'
import FormSuccess from '@/modules/auth/form-pieces/alerts/success-alert'

// Buttons
import SubmitButton from '@/modules/auth/form-pieces/buttons/submit-form-button'

// Cards
import CardWrapper from '@/modules/auth/form-pieces/cards/card-wrapper'

// Form
import { useForm, FormProvider } from 'react-hook-form'

// Hooks
import { useEffect, useState, useTransition } from 'react'

// Inputs
import PasswordInput from '@/modules/auth/form-pieces/inputs/password-input'

// Intl
import { useLocale, useTranslations } from 'next-intl'

// Shadcn
import { Form } from '@/modules/ui/form'

// Zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewPasswordSchema } from '@/modules/auth/new-password/schemas'

export default function NewPasswordForm() {
  // States
  const [error, setError] = useState<string | undefined>('')
  const [hydrated, setHydrated] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [success, setSuccess] = useState<string | undefined>('')

  // Navigation
  const locale = useLocale()

  // Translations
  const f = useTranslations('Forms')

  // Form
  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    mode: 'onSubmit',
    defaultValues: {
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    // Reset
    setError('')
    setSuccess('')
    // Send
    startTransition(() => {
      console.log('Values: ', values)
    })
  }

  // Hydration
  useEffect(() => setHydrated(true), [])

  return hydrated ? (
    <CardWrapper
      pageNameRedirect={f('newPasswordSchema.pageNameRedirect')}
      redirectButtonHref={`/${locale}/sign-in`}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <PasswordInput name='password' isPending={isPending} />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <SubmitButton
              message={f('newPasswordSchema.changeButton')}
              isPending={isPending}
            />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  ) : null
}
