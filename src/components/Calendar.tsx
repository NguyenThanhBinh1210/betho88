import React, { useState } from 'react'

interface CalendarProps {
  onDateSelect: (date: Date) => void // Callback khi chọn ngày
  selectedDate: Date | null // Ngày đã chọn
}

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Calendar: React.FC<CalendarProps> = ({ onDateSelect, selectedDate }) => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentYear, currentMonth, day)
    onDateSelect(selectedDate) // Gọi callback khi chọn ngày nhưng không đóng Calendar
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth &&
      selectedDate.getFullYear() === currentYear
    )
  }

  return (
    <div className='w-80 p-4 bg-blue-900 text-white rounded-lg shadow-lg'>
      {/* Điều hướng tháng */}
      <div className='flex justify-between items-center mb-4'>
        <button onClick={handlePrevMonth}>&laquo;</button>
        <div className='text-center'>
          <div className='font-semibold'>
            {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
        </div>
        <button onClick={handleNextMonth}>&raquo;</button>
      </div>

      {/* Hiển thị các thứ trong tuần */}
      <div className='grid grid-cols-7 gap-2 text-center font-medium'>
        {daysOfWeek.map((day, index) => (
          <div key={index} className='text-xs'>
            {day}
          </div>
        ))}
      </div>

      {/* Hiển thị các ngày trong tháng */}
      <div className='grid grid-cols-7 gap-2 mt-2 text-center'>
        {Array.from({ length: startOffset }).map((_, index) => (
          <div key={index} className='text-transparent'>
            0
          </div>
        ))}

        {Array.from({ length: daysInMonth }).map((_, dayIndex) => {
          const day = dayIndex + 1
          const selected = isSelected(day) // Kiểm tra nếu ngày được chọn

          return (
            <div
              key={dayIndex}
              onClick={() => handleDateClick(day)}
              className={`px-2 py-1 rounded-lg cursor-pointer  ${selected ? 'bg-green-500' : ''} hover:bg-blue-700`}
            >
              {day}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
