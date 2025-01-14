// Auth layout
export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // Main element for auth pages
    <main className='min-w-52 col-span-3 flex justify-center items-center h-fit'>
      {/* Auth pages */}
      {children}
    </main>
  )
}
