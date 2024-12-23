import { useEffect, useState } from 'react'
import { useUserSession } from '@/modules/configuration/hooks/sessions/useUserSession'
import {
  FormLabel,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/modules/ui/form'
import { useFormContext } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { getGenders } from '@/modules/configuration/actions/user-gender-action'
import '@/modules/configuration/styles/select-apperance.css'

interface GenderInputProps {
  name: string
  isPending: boolean
}

// Formato personalizado para mostrar "Non-binary" correctamente
function formatGenderText(text: string): string {
  if (text.toLowerCase() === 'non-binary') return 'Non-binary'
  return text
}

export default function GenderInput({ name, isPending }: GenderInputProps) {
  const t = useTranslations('Forms')
  const { session, hydrated } = useUserSession()
  const [userGender, setUserGender] = useState<string | undefined>(undefined)
  const [genders, setGenders] = useState<{ id: string; name: string }[]>([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const { control } = useFormContext()

  useEffect(() => {
    if (hydrated) {
      setUserGender(session?.user?.gender || '')
    }
  }, [hydrated, session])

  useEffect(() => {
    async function fetchGenders() {
      try {
        const fetchedGenders = await getGenders()
        setGenders(fetchedGenders)
      } catch (error) {
        console.error('Error fetching genders:', error)
      }
    }
    fetchGenders()
  }, [])

  return hydrated ? (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor='gender' className='uppercase text-sm'>
            {t('inputs.gender')}
          </FormLabel>
          <FormControl>
            <div className='relative w-full'>
              <button
                type='button'
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className='text-sm outline-none select w-full h-9 px-3 py-1 rounded-none border-[0.094rem] border-solid bg-[#F4F4F4] dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] hover:bg-[#EBEAEB] focus:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] dark:focus:bg-[#3b3b40] text-[#1D0F0F] dark:text-[#D4DBE2] placeholder:text-[#453C41] dark:placeholder:text-[#848489] text-left'
                disabled={isPending}
              >
                {formatGenderText(
                  genders.find((g) => g.id === userGender)?.name ||
                    t('inputs.genders.reserved')
                )}
              </button>
              {isDropdownOpen && (
                <ul className='absolute z-10 bg-white dark:bg-[#26272c] border-[#EBEAEB] dark:border-[#3b3b40] border-[0.094rem] rounded-none w-full border-t-0'>
                  <li
                    onClick={() => {
                      field.onChange('')
                      setUserGender('')
                      setIsDropdownOpen(false)
                    }}
                    className='text-sm px-3 py-1 cursor-pointer hover:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] rounded-none'
                  >
                    {t('inputs.genders.reserved')}
                  </li>
                  {genders.map(({ id, name }) => (
                    <li
                      key={id}
                      onClick={() => {
                        field.onChange(id)
                        setUserGender(id)
                        setIsDropdownOpen(false)
                      }}
                      className='text-sm px-3 py-1 cursor-pointer hover:bg-[#EBEAEB] dark:hover:bg-[#3b3b40] rounded-none'
                    >
                      {formatGenderText(t(`inputs.genders.${name}`))}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : null
}
