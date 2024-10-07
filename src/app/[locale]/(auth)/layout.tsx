export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex justify-center items-center w-full h-screen'>
      {children}
    </main>
  )
}
