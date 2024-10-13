import React, { useState, useRef, useEffect } from 'react'

interface BetOption {
  label: string
  count: number
}

interface AccordionProps {
  title: string
  betOptions: BetOption[]
  count: number
}

const Accordion: React.FC<AccordionProps> = ({ title, betOptions, count }) => {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState('0px')

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isOpen])

  return (
    <div className='bg-secondary'>
      <div
        className='border-b hover:bg-primary transition-all border-borderColor text-textOpacity-800 px-2 py-1.5 flex items-center gap-x-1 cursor-pointer'
        onClick={handleToggle}
      >
        <div className='w-[22px] h-[22px]'></div>
        <p>
          {title} ({count})
        </p>
        <span className={`ml-auto transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
          </svg>
        </span>
      </div>
      <div
        ref={contentRef}
        className='overflow-hidden transition-max-height duration-300 ease-in-out'
        style={{ maxHeight: height, opacity: isOpen ? 1 : 0, transition: 'opacity 300ms ease-in-out' }}
      >
        <div className='text-[13px]'>
          {betOptions.map((option, index) => (
            <div
              key={index}
              className={`flex items-center gap-x-1 px-2 py-1 ${
                index === 0 ? 'text-textActive' : 'text-textOpacity-800 transition-all hover:text-textActive'
              }`}
            >
              <div className='w-[22px] h-[22px] flex-shrink-0'></div>
              <p className='line-clamp-1'>
                {option.label} ({option.count})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accordion
