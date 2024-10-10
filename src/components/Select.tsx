import { useState, useEffect, useRef } from 'react'

interface SelectProps {
  startContent?: React.ReactNode
  className?: string
  options: string[]
  defaultValue?: string
  classNameButton?: string
  onChange?: (value: string) => void
  placement?: 'left' | 'right'
}

const Select: React.FC<SelectProps> = ({
  options,
  placement = 'right',
  className = '',
  startContent,
  classNameButton = '',
  defaultValue = '',
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange && onChange(option)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={`${className} relative z-50`} ref={selectRef}>
      <button
        className={`flex items-center border-[#ffffff52] text-foreground-200 border justify-between px-1.5 h-[28px] min-w-[128px] transition-all rounded-sm  ${classNameButton ? classNameButton : 'hover:bg-selectHover'
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center gap-x-1'>
          {startContent}
          <p>{selectedOption || 'Select Language'}</p>
        </div>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </span>
      </button>
      <div
        className={`absolute text-foreground-300 text-xs min-w-full w-max top-full rounded-sm border border-[#ffffff29] translate-y-1 ${placement === 'right' && 'right-0'
          } ${placement === 'left' && 'left-0'} bg-secondary transition-all duration-300 ease-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
      >
        <ul>
          {options.map((option) => (
            <li
              key={option}
              className='px-1.5 py-1.5 hover:bg-primary cursor-pointer'
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Select
