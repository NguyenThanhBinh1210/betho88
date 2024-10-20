import { useState } from 'react'
import MatchAccordion from '~/components/Desktop/MatchAccordion'
import MatchCard from '~/components/Desktop/MatchCard'
import Select from '~/components/Select'
const betOptions: string[] = [
  'Tất Cả',
  '1X2',
  'Tỷ Số Chính Xác',
  'Lẻ/Chẵn',
  'Tổng Số Bàn Thắng',
  'Hiệp 1/Toàn Trận',
  'Chẵn / Lẻ của Nửa trận/Toàn trận',
  'Bàn thắng Đầu/ Cuối',
  'Cá Cược Tổng Hợp',
  'Cược Thắng'
]
const matchesArray = ['Tất cả trận đấu', 'Các trận đấu chính', 'Thị trường khác']

const upcomingEventsArray = [
  'Sắp diễn ra',
  '4 giờ tới',
  '8 giờ tới',
  'Hiện nay ~ 04:00',
  '04:00 ~ 08:00',
  '08:00 ~ 12:00'
]
const Sports = () => {
  return (
    <div className='py-2 text-[13px]'>
      <div className='px-2'>
        <div className='flex items-center justify-between border-b border-borderColor-900 pb-1'>
          <div className='flex items-center gap-x-2  relative z-10'>
            <div className='font-bold flex items-center'>
              <div className='size-[22px]'></div>
              <p className='text-textOpacity-800'>Bóng đá / Hôm nay</p>
            </div>
            <Select
              placement='left'
              options={betOptions}
              defaultValue='Tất Cả'
              classNameButton='bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none'
            />
          </div>
          <div className='flex items-center gap-x-2  py-1'>
            <Select
              options={matchesArray}
              defaultValue='Bộ lọc trận đấu'
              classNameButton='bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none'
            />
            <Select
              options={matchesArray}
              defaultValue='Tất cả trận đấu'
              classNameButton='bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none'
            />
            <Select
              options={upcomingEventsArray}
              defaultValue='Từ trước đến nay'
              classNameButton='bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none'
            />
            <button
              className={`flex items-center border-[#ffffff52] border justify-between px-1.5  transition-all rounded-sm  bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none`}
            >
              (55/55) Giải
            </button>
          </div>
        </div>
        <div className='flex items-center gap-x-2 border-b border-borderColor-900  py-1 mb-1'>
          <MatchCard />
          <MatchCard />
        </div>
        <div className='flex items-center gap-x-2   py-1 mb-1'>
          <div className='space-x-2'>
            <button className='bg-buttonTab-active rounded px-2 py-0.5 text-textOpacity-800 text-xs'>Tất cả</button>
            <button className='bg-buttonTab hover:bg-buttonTab-hover transition-all rounded px-2 py-0.5 text-textOpacity-800 text-xs'>
              Phạt góc
            </button>
            <button className='bg-buttonTab hover:bg-buttonTab-hover transition-all rounded px-2 py-0.5 text-textOpacity-800 text-xs'>
              Thẻ phạt
            </button>
          </div>
        </div>

        <MatchList />
      </div>
    </div>
  )
}
const MatchList = () => {
  const initialItems: Record<string, boolean> = {
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false
  }
  const [openItems, setOpenItems] = useState(initialItems)
  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleToggleAll = () => {
    setOpenItems((prev) => {
      const allClosed = Object.values(prev).every((isOpen) => !isOpen)
      const newState = Object.keys(prev).reduce<Record<string, boolean>>((acc, key) => {
        acc[key] = allClosed
        return acc
      }, {})

      return newState
    })
  }
  const allClosed = Object.values(openItems).every((isOpen) => !isOpen)

  return (
    <div>
      <div className='bg-gradient-to-b cursor-pointer from-primary to-background rounded flex'>
        <button
          onClick={handleToggleAll}
          className='w-6 flex justify-center items-center border-r border-borderColor-900'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className={`size-4 transform transition-transform duration-300 ${allClosed ? '-rotate-180' : 'rotate-0'}`}
          >
            <path
              fillRule='evenodd'
              d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div className='flex-1 flex items-center justify-between py-1.5'>
          <div className='flex items-center gap-1'>
            <div className='w-[22px]'></div>
            <p className='text-textOpacity-800 text-xs'>Trận đấu</p>
          </div>
          <div className='flex  items-center gap-1 pr-2'>
            <Select
              options={betOptions}
              defaultValue='Lựa chọn bình thường'
              classNameButton='hover:bg-transparent text-xs !h-[20px] gap-2 !min-w-0'
            />
            <Select
              options={betOptions}
              defaultValue='Hai dòng'
              classNameButton='hover:bg-transparent text-xs !h-[20px] gap-2 !min-w-0'
            />
          </div>
        </div>
      </div>
      <MatchAccordion title='Giao hữu Quốc tế u19' keyName='item1' isOpen={openItems.item1} toggleItem={toggleItem} />
      <MatchAccordion title='Giao hữu Quốc tế u20' keyName='item2' isOpen={openItems.item2} toggleItem={toggleItem} />
    </div>
  )
}

export default Sports
