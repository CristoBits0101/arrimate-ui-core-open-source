// Types props
interface FieldsetProps {
  legend: string
  children: React.ReactNode
}

const Fieldset: React.FC<FieldsetProps> = ({ legend, children }) => {
  return (
    <fieldset className='w-full flex flex-col border border-solid dark:border-[#3b3b40] border-[#EBEAEB] p-4'>
      <legend className='text-lg font-medium px-2'>{legend}</legend>
      <div className='w-full h-fit grid grid-cols-[1fr,1fr,1fr,1fr] gap-4'>
        {children}
      </div>
    </fieldset>
  )
}

export default Fieldset
