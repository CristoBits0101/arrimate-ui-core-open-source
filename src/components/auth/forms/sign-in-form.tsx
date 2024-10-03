'use client'

// components
import CardWrapper from '@/components/auth/cards/card-wrapper'
import FormError from '@/components/auth/alerts/form-error'
import FormSuccess from '@/components/auth/alerts/form-success'

// react-hook-form
import { useForm, FormProvider } from 'react-hook-form'

// shadcn/ui
import { Form } from '@/components/ui/form'

// next-intl
import { useLocale } from 'next-intl'

// zod
import * as z from 'zod'
import { SignInSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import SignInSubmit from '../buttons/sign-in-submit'

// Importar componentes de entrada
import EmailInput from '@/components/auth/inputs/email-input'
import PasswordInput from '@/components/auth/inputs/password-input'

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
    console.log(values)
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
