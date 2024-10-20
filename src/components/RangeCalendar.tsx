import React, { useState } from 'react'

// Hàm để lấy các ngày trong một tháng
const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const RangeCalendar: React.FC = () => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [startDate, setStartDate] = useState<Date | null>(null) // Ngày bắt đầu
  const [endDate, setEndDate] = useState<Date | null>(null) // Ngày kết thúc

  // Lấy số ngày trong tháng hiện tại
  const daysInMonth = getDaysInMonth(currentMonth, currentYear)

  // Lấy thứ của ngày đầu tiên trong tháng
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  // Điều chỉnh để bắt đầu từ thứ Hai (Mon)
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1

  // Chuyển sang tháng trước
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  // Chuyển sang tháng sau
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  // Chuyển sang năm trước
  const handlePrevYear = () => {
    setCurrentYear(currentYear - 1)
  }

  // Chuyển sang năm sau
  const handleNextYear = () => {
    setCurrentYear(currentYear + 1)
  }

  // Hàm chọn ngày
  const handleDateClick = (day: number) => {
    const selectedDate = new Date(currentYear, currentMonth, day)

    if (!startDate || (startDate && endDate)) {
      // Nếu chưa chọn ngày bắt đầu hoặc đã chọn cả hai ngày, reset và chọn ngày mới làm ngày bắt đầu
      setStartDate(selectedDate)
      setEndDate(null)
    } else if (startDate && !endDate) {
      // Nếu đã chọn ngày bắt đầu và chưa chọn ngày kết thúc, chọn ngày kết thúc
      if (selectedDate > startDate) {
        setEndDate(selectedDate)
      } else {
        // Nếu ngày chọn nhỏ hơn ngày bắt đầu, đảo ngược lại
        setEndDate(startDate)
        setStartDate(selectedDate)
      }
    }
  }

  // Hàm để kiểm tra xem một ngày có nằm trong khoảng đã chọn hay không
  const isInRange = (day: number) => {
    if (!startDate || !endDate) return false
    const date = new Date(currentYear, currentMonth, day)
    return date >= startDate && date <= endDate
  }

  // Hàm để kiểm tra xem một ngày có phải là ngày bắt đầu hoặc ngày kết thúc không
  const isStartDate = (day: number) => {
    return (
      startDate &&
      startDate.getDate() === day &&
      startDate.getMonth() === currentMonth &&
      startDate.getFullYear() === currentYear
    )
  }

  const isEndDate = (day: number) => {
    return (
      endDate &&
      endDate.getDate() === day &&
      endDate.getMonth() === currentMonth &&
      endDate.getFullYear() === currentYear
    )
  }

  return (
    <div className='w-80 p-4 bg-blue-900 text-white rounded-lg shadow-lg'>
      {/* Điều hướng tháng và năm */}
      <div className='flex justify-between items-center mb-4'>
        <button onClick={handlePrevYear}>&laquo;&laquo;</button>
        <button onClick={handlePrevMonth}>&laquo;</button>
        <div className='text-center'>
          <div className='font-semibold'>
            {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
          </div>
        </div>
        <button onClick={handleNextMonth}>&raquo;</button>
        <button onClick={handleNextYear}>&raquo;&raquo;</button>
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
        {/* Để trống các ngày trước ngày 1 */}
        {Array.from({ length: startOffset }).map((_, index) => (
          <div key={index} className='text-transparent'>
            0
          </div>
        ))}

        {/* Hiển thị ngày trong tháng */}
        {Array.from({ length: daysInMonth }).map((_, dayIndex) => {
          const day = dayIndex + 1
          const isWeekend = (startOffset + dayIndex) % 7 === 5 || (startOffset + dayIndex) % 7 === 6

          const selected = isStartDate(day) || isEndDate(day)
          const inRange = isInRange(day)

          return (
            <div
              key={dayIndex}
              onClick={() => handleDateClick(day)}
              className={`px-2 py-1 rounded-lg cursor-pointer 
              ${selected ? 'bg-green-500' : ''} 
              ${inRange && !selected ? 'bg-green-300' : ''}
              ${isWeekend ? 'text-red-500' : 'text-white'} hover:bg-blue-700`}
            >
              {day}
            </div>
          )
        })}
      </div>

      {/* Phần chọn ngày */}
      <div className='text-center mt-4'>
        {startDate && endDate ? (
          <p>
            Ngày đã chọn: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
          </p>
        ) : startDate ? (
          <p>Ngày bắt đầu: {startDate.toLocaleDateString()}</p>
        ) : (
          <p>Chọn ngày bắt đầu</p>
        )}
      </div>
    </div>
  )
}

export default RangeCalendar
