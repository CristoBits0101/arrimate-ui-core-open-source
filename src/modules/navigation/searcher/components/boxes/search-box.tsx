// Types
interface InputContainerProps {
  children: React.ReactNode
}

export default function InputContainer({ children }: InputContainerProps) {
  // Validation
  if (!children) return

  return (
    <div
      className='flex items-center bg-[#f4f4f4] dark:bg-[#26272C] border border-[#EBEAEB] dark:border-[#3b3b40] rounded-full h-full w-full'
      style={{}}
    >
      {children}
    </div>
  )
}
