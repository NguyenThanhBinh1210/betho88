import React, { useState, useRef, useEffect } from 'react'
import Calendar from './Calendar' // Sử dụng component Calendar đã tạo trước

const DatePicker: React.FC = () => {
  const today = new Date()
  const [selectedDate, setSelectedDate] = useState<Date>(today) // Lưu trữ ngày đã chọn
  const [showCalendar, setShowCalendar] = useState(false) // Điều khiển hiển thị lịch
  const inputRef = useRef<HTMLDivElement>(null) // Để kiểm tra sự kiện nhấp ra ngoài
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowCalendar(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [inputRef])

  return (
    <div className='relative inline-block z-[51] cursor-pointer' ref={inputRef}>
      <div onClick={toggleCalendar} className='flex items-center border border-[#ffffff52] rounded-sm pr-1'>
        <input
          type='text'
          readOnly
          value={selectedDate ? selectedDate.toLocaleDateString() : ''}
          className={`flex items-center text-textOpacity-200 cursor-pointer justify-between px-1.5 h-[28px] min-w-[128px] transition-all   `}
        />

        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`size-4 transition-transform ${showCalendar ? 'rotate-180' : 'rotate-0'}`}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </span>
      </div>

      <div
        className={`absolute mt-2 z-10 bg-white shadow-lg rounded-lg transition-all transform origin-top ${showCalendar ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'
          }`}
      >
        <Calendar onDateSelect={handleDateSelect} selectedDate={selectedDate} />
      </div>
    </div>
  )
}

export default DatePicker
