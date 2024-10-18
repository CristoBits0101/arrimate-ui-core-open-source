export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <main className='min-w-52 col-span-3 flex justify-center items-center'>{children}</main>
}
