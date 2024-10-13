import { useState } from 'react'
import Accordion from '~/components/Accordion'
import Tabs from '~/components/Tabs'
interface BetOption {
  label: string
  count: number
}

interface BetCategory {
  title: string
  count: number
  children: BetOption[]
}
const betCategories: BetCategory[] = [
  {
    title: 'Bóng đá',
    count: 527,
    children: [
      { label: 'Tất cả', count: 443 },
      { label: '1X2', count: 428 },
      { label: 'Tỷ Số Chính Xác', count: 393 },
      { label: 'Lẻ/Chẵn', count: 429 },
      { label: 'Tổng Số Bàn Thắng', count: 393 },
      { label: 'Hiệp 1/Toàn Trận', count: 393 },
      { label: 'Chẵn / Lẻ của Nửa trận/Toàn trận', count: 393 },
      { label: 'Bàn thắng Đầu/ Cuối', count: 393 },
      { label: 'Cá Cược Tổng Hợp', count: 500 },
      { label: 'Cược Thắng', count: 80 }
    ]
  },
  {
    title: 'Bóng rổ',
    count: 369,
    children: [
      { label: 'Tất cả', count: 231 },
      { label: 'Cá Cược Tổng Hợp', count: 88 },
      { label: 'Cược Thắng', count: 50 }
    ]
  },
  {
    title: 'Thể Thao Điện Tử',
    count: 53,
    children: [
      { label: 'Tất cả', count: 53 },
      { label: 'LOL', count: 20 },
      { label: 'CS 2', count: 7 },
      { label: 'KOG', count: 2 },
      { label: 'Valorant', count: 3 },
      { label: 'Arena of Valor', count: 2 },
      { label: 'PUBG', count: 4 },
      { label: 'Mobile Legends', count: 10 },
      { label: 'Rainbow Six', count: 1 },
      { label: 'Warcraft 3', count: 4 },
      { label: 'Cá Cược Tổng Hợp', count: 4 },
      { label: 'Xổ Số Thể Thao Điện Tử', count: 0 } // Nếu không có dữ liệu cụ thể, có thể đặt count là 0
    ]
  }
]
const tabs = [{ label: 'Sớm' }, { label: 'Hôm nay' }, { label: 'Trực tiếp', count: 145 }]

const DesktopSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='p-2 text-[13px] w-[244px] h-[calc(100vh-120px)] z-[55] fixed no-scrollbar overflow-y-auto bg-background space-y-2'>
      <div className='bg-secondary rounded'>
        <div className='text-textOpacity-200  cursor-pointer p-2 flex justify-between border-b border-borderColor'>
          <div className='flex items-center gap-1'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
              <path
                fillRule='evenodd'
                d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                clipRule='evenodd'
              />
            </svg>

            <p className='text-xs'>U4W00AB000</p>
          </div>
          <div className='flex items-center gap-1'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                strokeWidth={2}
                className='size-5'
              >
                <path
                  fillRule='evenodd'
                  d='M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='size-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='size-5'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </button>
          </div>
        </div>
        <div className='p-2 space-y-1'>
          <div className='flex items-center justify-between'>
            <span className='text-textOpacity-800'>Hạn mức còn lại</span>
            <span className='text-textOpacity-900'>UT 0</span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-textOpacity-800'>Số dư</span>
            <span className='text-textOpacity-900'>UT 0</span>
          </div>
        </div>
      </div>
      <div className='bg-secondary rounded '>
        <div className='grid grid-cols-2 py-2 border-b border-borderColor'>
          <div className='flex items-center justify-between  cursor-pointer relative text-textActive'>
            <p className='ml-1'>Phiếu đặt cược</p>
            <button className='hover:opacity-30'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='size-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </button>
            <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-[1.5px] bg-textActive'></div>
          </div>
          <div className='flex items-center justify-center  cursor-pointer relative '>
            <p className='ml-1 t'>Bảng cược</p>

            {/* <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[90%] h-[1.5px] bg-textActive"></div> */}
          </div>
        </div>
      </div>
      <div className='flex justify-between  items-center bg-gradient-to-b from-primary to-background px-2 py-1 rounded-md'>
        <div className='flex gap-x-1.5 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6 text-red-600'
          >
            <path
              fillRule='evenodd'
              d='M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z'
              clipRule='evenodd'
            />
          </svg>
          <p className='font-semibold'>Phổ biến</p>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth={3}
          fill='currentColor'
          className='size-4 text-textOpacity-100'
        >
          <path
            fillRule='evenodd'
            d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='flex justify-between  items-center bg-gradient-to-b from-primary to-background px-2 py-1 rounded-md'>
        <div className='flex gap-x-1.5 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6 text-yellow-500'
          >
            <path
              fillRule='evenodd'
              d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
              clipRule='evenodd'
            />
          </svg>

          <p className='font-semibold'>Yêu thích của tôi</p>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth={3}
          fill='currentColor'
          className='size-4 text-textOpacity-100'
        >
          <path
            fillRule='evenodd'
            d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='flex justify-between  items-center bg-gradient-to-b from-primary to-background px-2 py-1 rounded-md'>
        <div className='flex gap-x-1.5 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6 text-yellow-500'
          >
            <path
              fillRule='evenodd'
              d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
              clipRule='evenodd'
            />
          </svg>

          <p className='font-semibold'>Đa màn hình</p>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth={3}
          fill='currentColor'
          className='size-4 text-textOpacity-100'
        >
          <path
            fillRule='evenodd'
            d='M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div>
        <div
          onClick={toggleAccordion}
          className='flex justify-between  items-center bg-gradient-to-b from-primary to-background px-2 py-1 rounded-md'
        >
          <div className='flex gap-x-1.5 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='size-6 text-yellow-500'
            >
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
                clipRule='evenodd'
              />
            </svg>
            <p className='font-semibold'>Thể thao</p>
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div
          className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <Tabs tabs={tabs} defaultActiveIndex={0} />
          {betCategories.map((item) => (
            <Accordion key={item.title} title={item.title} betOptions={item.children} count={item.count} />
          ))}
        </div>
      </div>
      <AccordionWrap title='Cổng Game SABA' items={['Sảnh SABA.club', 'Sảnh SABA.mobi', 'Mega Keno']} />
      <AccordionWrap
        title='Thể thao ảo'
        items={[
          'Cúp Bóng Đá Euro Ảo',
          'Virtual Soccer Bundesliga',
          'Cúp bóng đá ảo',
          'Cúp bóng đá ảo Châu Á',
          'Giải đấu Bóng đá Ảo',
          'Giải vô địch bóng đá thế giới ảo',
          'Quốc gia Bóng đá Ảo',
          'Bóng rổ Ảo',
          'Bóng đá Ảo',
          'Virtual Football League',
          'Đá Gà Ảo',
          'Quần Vợt Ảo'
        ]}
      />
      <AccordionWrap
        title='Number Game'
        items={['SABA xD', 'Tất Cả Trò Chơi Số', 'Number Game', 'Happy 5', 'Parlay 5', 'Soccer 5']}
      />
      <AccordionWrap
        title='Saba PinGoal'
        items={['All PinGoal', 'Soccer PinGoal', 'Soccer PinGoal Max', 'Basketball PinGoal', 'E-Sports PinGoal']}
      />
      <AccordionWrap
        title='Live Casino'
        items={[
          'WE Live Casino',
          'Allbet',
          'AE Sexy',
          'PP Live Casino',
          'SA Gaming',
          'YeeBet',
          'BG',
          'ION',
          'FGG',
          'WM',
          'BBIN'
        ]}
      />
      <AccordionWrap
        title='Sòng bạc'
        items={[
          'Casino Royale',
          'Saba Sòng bạc',
          'Trò chơi trên bàn',
          'Trò chơi Xèng',
          'Funky Games',
          'Trò chơi Ảo',
          'Dò Mìn Thể Thao',
          'Tháp Thể Thao'
        ]}
      />
      <AccordionWrap
        title='RNG Keno/Xổ số'
        items={[
          'RNG Keno',
          'MaxGame',
          'Xổ số',
          'Trò chơi trên bàn',
          'Lucky 3D',
          'Xổ số Bóng đá',
          'Xổ Số Thể Thao Điện Tử',
          'Xổ Số NBA',
          'Xổ Số Quần Vợt',
          'Xổ số Cricket'
        ]}
      />
    </div>
  )
}

interface AccordionProps {
  title: string
  items: string[]
}
export const AccordionWrap: React.FC<AccordionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div
        onClick={toggleAccordion}
        className='flex justify-between items-center bg-gradient-to-b from-primary to-background px-2 py-1 rounded-md cursor-pointer'
      >
        <div className='flex gap-x-1.5 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-6 text-yellow-500'
          >
            <path
              fillRule='evenodd'
              d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
              clipRule='evenodd'
            />
          </svg>
          <p className='font-semibold'>{title}</p>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
          <path
            fillRule='evenodd'
            d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden h-full ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className='hover:bg-primary bg-secondary transition-all border-borderColor text-textOpacity-800 px-2 py-1.5 flex items-center gap-x-1 cursor-pointer'
          >
            <div className='w-[22px] h-[22px]'></div>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesktopSidebar
