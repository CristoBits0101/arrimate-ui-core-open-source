import { useEffect, useState } from 'react'
import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'

const firstNames = [
  'Li',
  'Emily',
  'Mateo',
  'Priya',
  'Aleksandr',
  'Fatima',
  'Nina',
  'Luca'
]
const lastNames = [
  'Nakamura',
  'Johnson',
  'Fernández',
  'Sharma',
  'Petrov',
  'Al-Masri',
  'Müller',
  'Dubois'
]

const getRandomBoolean = () => Math.random() > 0.5
const getRandomFollowers = () => Math.floor(Math.random() * 2000000)

export default function HomePanel() {
  // Explicitly define the type as an array of JSX.Element
  const [userCards, setUserCards] = useState<JSX.Element[]>([])

  useEffect(() => {
    const newCards: JSX.Element[] = [] // Define the array type here too
    for (let i = 0; i < 7; i++) {
      const randomFirstName =
        firstNames[Math.floor(Math.random() * firstNames.length)]
      const randomLastName =
        lastNames[Math.floor(Math.random() * lastNames.length)]

      newCards.push(
        <ArrimateFollowCard
          key={i}
          nickname={`${randomFirstName} ${randomLastName}`}
          trending={getRandomBoolean()}
          followers={getRandomFollowers()}
          reliable={getRandomBoolean()}
          verified={getRandomBoolean()}
        />
      )
    }
    setUserCards(newCards)
  }, []) // this runs only once on the client

  return (
    <section className='w-full h-full flex flex-col justify-between items-center bg-slate-200'>
      {userCards}
    </section>
  )
}
