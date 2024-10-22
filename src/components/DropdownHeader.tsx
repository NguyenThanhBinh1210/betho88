import { useContext, useEffect, useRef, useState } from 'react'
import MobileIcon from './icons/MobileIcon'
import ComputerIcon from './icons/ComputerIcon'
import { AppContext } from '~/contexts/app.context'

const DropdownHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { isMobile, setIsMobile } = useContext(AppContext)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative' ref={dropdownRef}>
      <div onClick={toggleDropdown} className='flex flex-col items-center gap-1 cursor-pointer'>
        <div className='bg-blue-500 p-2 rounded-full'>{isMobile ? <MobileIcon /> : <ComputerIcon />}</div>
        <p className='text-xs w-[60px] text-center'>{isMobile ? 'Mobile' : 'PC'}</p>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className='absolute mt-2 bg-blue-500 shadow-lg rounded-lg w-max text-xs'>
          <ul className='flex flex-col rounded-lg overflow-hidden'>
            <li
              onClick={() => {
                toggleDropdown()
                setIsMobile(false)
              }}
              className=' p-2 px-4 hover:hover:bg-[#131a34]/50 transition-all flex items-center gap-2 cursor-pointer border-b'
            >
              <div className=' p-1 rounded-full'>
                <ComputerIcon />
              </div>
              PC
            </li>
            <li
              onClick={() => {
                toggleDropdown()

                setIsMobile(true)
              }}
              className=' p-2 px-4 hover:hover:bg-[#131a34]/50 transition-all flex items-center gap-2 cursor-pointer'
            >
              <div className=' p-1 rounded-full'>
                <MobileIcon />
              </div>
              Mobile
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropdownHeader
