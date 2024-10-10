import { useState } from 'react'

const DesktopRightbar = () => {
  return (
    <div className='w-[244px] text-white text-[13px] space-y-1 pt-2'>
      <AccordionWrap
        isView
        title='10/7 Ligue 1 NICE vs PSG Highlight'
        items={['Sảnh SABA.club', 'Sảnh SABA.mobi', 'Mega Keno']}
      />
      <AccordionWrap title='Instant Play' items={['Sảnh SABA.club', 'Sảnh SABA.mobi', 'Mega Keno']} />
    </div>
  )
}

interface AccordionProps {
  title: string
  items?: string[]
  isView?: boolean
}
export const AccordionWrap: React.FC<AccordionProps> = ({ title, isView }) => {
  const [isOpen, setIsOpen] = useState(isView)

  const toggleAccordion = () => {
    !isView && setIsOpen(!isOpen)
  }

  return (
    <div>
      <div
        onClick={toggleAccordion}
        className='flex justify-between items-center bg-gradient-to-b from-primary to-background px-2 py-1 rounded-md cursor-pointer'
      >
        <div className='flex gap-x-1.5 items-center'>
          <p className='font-semibold line-clamp-1'>{title}</p>
        </div>
        {!isView && (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        )}
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60' : 'max-h-0'}`}
      >
        <div className='h-60 bg-primary rounded-b-md'></div>
      </div>
    </div>
  )
}

export default DesktopRightbar
