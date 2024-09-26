import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import IconBg from '../icons/IconBg'
import { menu } from '~/constants/renaral.const'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showNav, setShowNav] = useState(false)
  return (
    <>
      <header className='text-white z-30 relative'>
        <div className='bg-[#a3805c] text-white text-sm text-center py-1 font-medium'>
          Cảnh giác: kiểm tra địa chỉ các trang web trước khi truy cập để tránh bị lừa đảo và bảo vệ quyền lợi của bạn.
        </div>
        <div className='md:bg-bgSecondary'>
          <div className='max-w-[1342px] w-full mx-auto 2xl:px-0 flex items-center justify-between p-2'>
            <p className='text-2xl'>Logo</p>
            <div
              onMouseEnter={() => setShowNav(true)}
              onMouseLeave={() => setShowNav(false)}
              className=' items-center gap-3 hidden lg:flex'
            >
              <Link to={'/'} className='hover:text-orange-300 text-[15px] font-medium transition-all'>
                Thể thao
              </Link>
              <Link to={'/'} className='hover:text-orange-300 text-[15px] font-medium transition-all'>
                Thể Thao Ảo
              </Link>
              <Link to={'/'} className='hover:text-orange-300 text-[15px] font-medium transition-all'>
                Thể thao điện tử
              </Link>
              <Link to={'/'} className='hover:text-orange-300 text-[15px] font-medium transition-all'>
                Number Game
              </Link>
              <Link to={'/'} className='hover:text-orange-300 text-[15px] font-medium transition-all'>
                Trò Chơi
              </Link>
              <Link to={'/'} className='hover:text-orange-300 text-[15px] font-medium transition-all'>
                RNG Keno
              </Link>
              <Link to={'/'} className='hover:text-orange-300 text-[15px] font-medium transition-all'>
                Cổng Game SABA
              </Link>
            </div>
            <div className='flex gap-2 items-center'>
              <Button className='text-white p-2 text-base rounded md:py-5 leading-4' size='sm' color='primary'>
                Tham gia ngay
              </Button>
              <Button className='text-white p-2 text-base rounded md:py-5 leading-4' size='sm' color='warning'>
                Đăng nhập
              </Button>
              <Button onClick={() => setShowMenu(true)} isIconOnly variant='light' size='sm' className='lg:hidden'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6 text-white'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div
        onMouseEnter={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
        className={`bg-[#171a47] hidden lg:block w-full py-3 transition-all fixed z-10 ${showNav ? "opacity-100 visible -translate-y-0" : 'opacity-0 invisible -translate-y-1/2'} `}>
        <div className='max-w-[1342px] w-full mx-auto 2xl:px-0 grid grid-cols-7 gap-3'>
          {menu.map((item, index) => (
            <div
              key={index}
              className='relative transition-all cursor-pointer hover:border-orange-300 hover:bg-[#323b9ed2] bg-[#262b64] overflow-hidden rounded-md border border-[#3b439c] '
            >
              <IconBg className='absolute scale-150 top-0 left-0 w-[400px] h-[200px]'></IconBg>
              <img className='relative' src={item.image} alt={item.title} />
              <div
                style={{
                  clipPath: ' polygon(0px 0px, 100% 0px, 96% 100%, 5% 100%)',
                  backgroundImage:
                    'linear-gradient(270deg, rgba(223, 189, 134, 0.8) 0%, rgba(255, 231, 179, 0.8) 48.11%, rgba(196, 153, 100, 0.8) 88.59%)'
                }}
                className='w-[70%] h-[0.5rem] left-1/2 -translate-x-1/2 absolute  -top-[1px]'
              ></div>
              <div
                style={{
                  clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)',
                  backgroundImage:
                    'linear-gradient(270deg, rgba(223, 189, 134, 0.8) 0%, rgba(255, 231, 179, 0.8) 48.11%, rgba(196, 153, 100, 0.8) 88.59%)'
                }}
                className='w-[70%] text-[#533E23] font-bold text-xs flex items-center justify-center h-[1.4rem] left-1/2 -translate-x-1/2 absolute  bottom-0'
              >
                {item.title}
                <div
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(270deg, rgba(170, 124, 65, 0.6) 10.9%, rgba(108, 83, 51, 0.6) 50.58%, rgba(139, 105, 60, 0.6) 92.83%)'
                  }}
                  className='w-full text-[#533E23] font-bold text-xs flex items-center justify-center h-[4px] left-1/2 -translate-x-1/2 absolute  bottom-0'
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setShowMenu(false)}
        style={{ zIndex: 20 }}
        className={`transition-all ${showMenu ? 'bg-opacity-20 visible' : 'bg-opacity-0 invisible'
          } fixed top-0 left-0 w-full h-full bg-black  md:hidden`}
      ></div>
      <div
        className={`${showMenu ? ' opacity-100 visible' : ' opacity-0 invisible'
          } w-2/3 top-0 right-0 transition-all h-full bg-[#363c8f]  text-white fixed z-30 `}
      >
        <div className='flex justify-end p-2 border-b border-[#464eb8]'>
          <Button onClick={() => setShowMenu(false)} isIconOnly variant='light' size='sm' className='md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6 text-white'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Header
