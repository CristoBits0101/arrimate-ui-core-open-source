'use client'

// Actions
import SignIn from '@/actions/sign-in'
// Components
import CardWrapper from '@/components/auth/cards/card-wrapper'
import EmailInput from '@/components/auth/inputs/email-input'
import FormError from '@/components/auth/alerts/form-error'
import FormSuccess from '@/components/auth/alerts/form-success'
import PasswordInput from '@/components/auth/inputs/password-input'
// React hook form
import { useForm, FormProvider } from 'react-hook-form'
// Shadcn/ui
import { Form } from '@/components/ui/form'
// Next-intl
import { useLocale } from 'next-intl'
// Zod
import * as z from 'zod'
import { SignInSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import SignInSubmit from '../buttons/sign-in-submit'

export default function LoginForm() {
  //
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  //
  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    SignIn(values)
  }
  return (
    <CardWrapper
      pageNameRedirect='Sign Up'
      signUpButtonLabel="Don't have an account? "
      signUpButtonHref={`/${useLocale()}/sign-up`}
      showSocial={true}
    >
      <FormProvider {...form}>
        <Form {...form}>
          <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
              <EmailInput name='email' />
              <PasswordInput name='password' />
            </div>
            <FormError message='' />
            <FormSuccess message='' />
            <SignInSubmit message='Continue' />
          </form>
        </Form>
      </FormProvider>
    </CardWrapper>
  )
}
