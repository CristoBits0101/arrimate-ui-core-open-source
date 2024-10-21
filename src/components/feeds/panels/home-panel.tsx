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

// Return a random boolean value 
const getRandomBoolean = () => Math.random() > 0.5

// Return a random number between 0 and 2000000
const getRandomFollowers = () => Math.floor(Math.random() * 2000000)

export default function HomePanel() {
  const userCards = []

  for (let i = 0; i < 7; i++) {
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)]
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)]

    userCards.push(
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

  return (
    <section className='w-full h-full flex flex-col justify-between items-center bg-slate-200'>
      {userCards}
    </section>
  )
}
