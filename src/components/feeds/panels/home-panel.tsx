import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'

export default function HomePanel() {
  return (
    <section className='w-full h-full flex flex-col justify-between items-center gap-3 overflow-hidden overflow-y-auto no-scrollbar'>
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Liang Wei'
        description='Shaping tomorrow with cutting-edge AI and robotics.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        nickname='Valeria Castillo'
        description='Crafting unforgettable brand experiences worldwide.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Ethan Collins'
        description='Accelerating growth with innovative marketing strategies.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Aarav Sharma'
        description='Building the future, one line of code at a time.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Zara Al-Faraj'
        description='Transforming data into impactful business decisions.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard
        avatar='/images/profiles/aspect-ratio-16-9/image1.jpg'
        nickname='Élodie Laurent'
        description='Leading projects to deliver sustainable, efficient results.'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
    </section>
  )
}
