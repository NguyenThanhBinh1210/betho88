/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Switch } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react'
import Sliders from '~/components/Slider/Sliders'
const data = [
  {
    name: 'One',
    image:
      'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_723.jpg?v=20240920115804'
  },
  {
    name: 'Two',
    image:
      'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_735.jpg?v=20240920115804'
  },
  {
    name: 'Three',
    image:
      'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_731.jpg?v=20240920115804'
  },
  {
    name: 'Four',
    image:
      'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_730.jpg?v=20240920115804'
  },
  {
    name: 'Five',
    image:
      'https://i.nvxcdn.com/newLogin/beforeBanner/desktop/vn/images/BBanner_VIVA88NEW_MAIN_728.jpg?v=20240920115804'
  }
]
const Header = () => {
  const [showHanMuc, setShowHanMuc] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // Hàm xử lý sự kiện click bên ngoài
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowHanMuc(false)
      }
    }
    const handleScroll = () => {
      setShowHanMuc(false)
    }
    // Thêm listener cho sự kiện mousedown
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll)

    // Cleanup listener khi component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref])
  return (
    <>
      <div className='bg-gradient-to-b from-[#0b3959] to-[#13191d]'>
        <div className='flex justify-between px-2'>
          <p className='text-purple-50 text-3xl'>Logo</p>
          <Button onClick={() => setShowHanMuc(!showHanMuc)} variant='light' className='text-white'>
            <div className='text-sm text-start'>
              <p>123123123</p>
              <p className='text-xs pl-2'>UT 0.00</p>
            </div>
          </Button>
        </div>
        <Sliders sliderData={data} />
      </div>
      {showHanMuc && (
        <div ref={ref} className='fixed text-white z-20 top-10 left-0 w-full px-3'>
          <div
            style={{ boxShadow: '0px 8px 20px 0px rgba(5,5,5,0.7)' }}
            className='p-2 border border-[#ffffff1f] rounded-lg bg-gradient-to-b to-[#0b3959] from-[#0c2639]'
          >
            <div className='flex justify-end items-center'>
              <p className='mr-2 text-xs'>Hiển thị số tài khoản dư</p>
              <Switch size='sm' color='primary'></Switch>
            </div>
            <div className='bg-[#1b3f5a] p-2 font-bold items-center py-4 rounded-lg flex justify-between mt-4'>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3'
                  />
                </svg>
                <p>Hạn mức còn lại</p>
              </div>
              <div>0.00</div>
            </div>
            <div className='px-2 mt-3'>
              <div className='flex items-center justify-between text-xs font-bold border-b border-gray-400 mb-2 pb-1'>
                <span className='text-gray-300 '>Số dư</span>
                <span className=''>0.00</span>
              </div>
              <div className='flex items-center justify-between text-xs font-bold border-b border-gray-400 mb-2 pb-1'>
                <span className='text-gray-300 '>Chưa xử lý</span>
                <span className=''>0.00</span>
              </div>
              <div className='flex items-center justify-between text-xs font-bold border-b border-gray-400 mb-2 pb-1'>
                <span className='text-gray-300 '>Giá trị dòng</span>
                <span className=''>0.00</span>
              </div>
              <div className='flex items-center justify-between text-xs font-bold border-b border-gray-400 mb-2 pb-1'>
                <span className='text-gray-300 '>Hạn mức được cấp</span>
                <span className=''>0.00</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
