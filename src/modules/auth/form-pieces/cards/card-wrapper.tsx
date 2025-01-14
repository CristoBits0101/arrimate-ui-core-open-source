'use client'

// Buttons
import RedirectButton from '@/modules/auth/form-pieces/buttons/redirect-page-button'

// Card
import Header from '@/modules/auth/form-pieces/cards/card-header'

// Intl
import { useTranslations } from 'next-intl'

// Panels
import OAuthPanel from '@/modules/auth/oauth-service/oauth-panel'
import SettingsPanel from '@/modules/auth/ui-settings/panels/settings-panel'

// Routing
import { usePathname } from '@/i18n/routing'

// Shadcn
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/modules/ui/card'

// Type props
interface CardWrapperProps {
  children: React.ReactNode
  pageNameRedirect?: string
  redirectButtonLabel?: string
  redirectButtonHref: string
  showSocial?: boolean
  showForgotPassword?: boolean
  showDividingLine?: boolean
}

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
        // Renders the OAuthPanel if showSocial is true
        <CardFooter>
          <OAuthPanel />
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
