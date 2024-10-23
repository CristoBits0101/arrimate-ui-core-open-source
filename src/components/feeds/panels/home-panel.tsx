import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'

export default function HomePanel() {
  const getRandomBoolean = () => Math.random() < 0.5
  const getRandomFollowers = () =>
    Math.floor(Math.random() * (2000000 - 500 + 1)) + 500

  return (
    <section className='w-full h-full flex flex-col gap-4 overflow-hidden overflow-y-auto no-scrollbar'>
      <div className='flex gap-4'>
        <ArrimateFollowCard
          nickname='Liang Wei'
          description='Shaping tomorrow with cutting-edge AI and robotics.'
          trending={getRandomBoolean()}
          followers={getRandomFollowers()}
          reliable={getRandomBoolean()}
          verified={getRandomBoolean()}
        />
        <ArrimateFollowCard
          nickname='Valeria Castillo'
          description='Crafting unforgettable brand experiences worldwide.'
          trending={getRandomBoolean()}
          followers={getRandomFollowers()}
          reliable={getRandomBoolean()}
          verified={getRandomBoolean()}
        />
      </div>
      <div className='flex gap-4'>
        <ArrimateFollowCard
          nickname='Ethan Collins'
          description='Accelerating growth with innovative marketing strategies.'
          trending={getRandomBoolean()}
          followers={getRandomFollowers()}
          reliable={getRandomBoolean()}
          verified={getRandomBoolean()}
        />
        <ArrimateFollowCard
          nickname='Aarav Sharma'
          description='Building the future, one line of code at a time.'
          trending={getRandomBoolean()}
          followers={getRandomFollowers()}
          reliable={getRandomBoolean()}
          verified={getRandomBoolean()}
        />
      </div>
    </section>
  )
}
