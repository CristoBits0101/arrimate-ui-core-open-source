import ArrimateFollowCard from '@/components/marketing/user/arrimate-follow-card'

export default function HomePanel() {
  return (
    <section className='w-full h-full flex flex-col gap-4'>
      <ArrimateFollowCard
        nickname='midulive'
        trending={true}
        followers={1000000}
        reliable={true}
        verified={true}
      />
      <ArrimateFollowCard nickname='Carlos Azaustre' followers={1} />
      <ArrimateFollowCard nickname='' followers={1} />
    </section>
  )
}
