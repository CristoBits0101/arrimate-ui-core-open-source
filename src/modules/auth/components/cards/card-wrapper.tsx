'use client'

// Imports the Header component
import Header from '@/modules/auth/components/cards/card-header'

// Imports the RedirectButton component
import RedirectButton from '@/modules/auth/components/buttons/redirect/redirect-page-button'

// Imports the SettingsPanel component
import SettingsPanel from '@/modules/auth/components/panels/settings-panel'

// Imports the SocialPanel component
import SocialPanel from '@/modules/auth/components/panels/social-panel'

// Imports Card components
import { Card, CardContent, CardFooter, CardHeader } from '@/modules/ui/card'

// Imports the usePathname hook
import { usePathname } from '@/i18n/routing'

// Imports the useTranslations hook
import { useTranslations } from 'next-intl'

// Declares the CardWrapperProps interface
interface CardWrapperProps {
  // Child components to render inside the card
  children: React.ReactNode
  // Optional page name for redirection
  pageNameRedirect?: string
  // Optional label for the redirect button
  redirectButtonLabel?: string
  // Redirect URL for the button
  redirectButtonHref: string
  // Flag to show social panel
  showSocial?: boolean
  // Flag to show forgot password option
  showForgotPassword?: boolean
  // Flag to show dividing line
  showDividingLine?: boolean
}

// Defines the CardWrapper component
export default function CardWrapper({
  children,
  pageNameRedirect,
  redirectButtonLabel,
  redirectButtonHref,
  showSocial = false,
  showForgotPassword = false,
  showDividingLine = false
}: CardWrapperProps) {
  // Gets the current path
  const path = usePathname()
  // Gets translations
  const t = useTranslations('Forms')
  return (
    // Renders the main Card container
    <Card className='relative w-[22rem] shadow-none rounded-none p-5 text-inherit border-[0.094rem] border-solid dark:border-[#3b3b40] border-[#EBEAEB] bg-transparent'>
      <SettingsPanel />
      <CardHeader>
        <Header />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        // Renders the SocialPanel if showSocial is true
        <CardFooter>
          <SocialPanel />
        </CardFooter>
      )}
      <CardFooter className='px-5 flex flex-col'>
        {showForgotPassword && (
          // Renders the forgot password button
          <RedirectButton
            href='/reset-password'
            label={t('signInForm.forgotPassword')}
          />
        )}
        {showDividingLine && (
          // Renders a dividing line with styles
          <div
            className={`w-full flex justify-center items-center space-x-4 font-light ${
              path === '/new-verification' || path === '/unauthorized-access'
                ? 'pt-0 pb-5'
                : 'py-5'
            }`}
          >
            <p className='text-[#EBEAEB] dark:text-[#3b3b40]'>━━━━━━━</p>
            <p className='text-[#767576] dark:text-[#848489]'>O</p>
            <p className='text-[#EBEAEB] dark:text-[#3b3b40]'>━━━━━━━</p>
          </div>
        )}
        {/* Renders the main redirect button */}
        <RedirectButton
          href={redirectButtonHref}
          label={redirectButtonLabel}
          page={pageNameRedirect}
        />
      </CardFooter>
    </Card>
  )
}
