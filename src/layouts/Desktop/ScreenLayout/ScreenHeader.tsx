import { Link, useLocation } from 'react-router-dom'
import logo from '~/assets/icons/logo_vn_w.svg'

const ScreenHeader = () => {
  const pathname = useLocation().pathname
  return (
    <header className=' flex items-center py-6'>
      <div className='w-[220px]  flex-shrink-0 px-2.5  '>
        <img className='w-full h-full object-cover scale-90' src={logo} alt='logo' loading='lazy' />
      </div>
      <div className='flex-1 grid grid-cols-5 gap-2 text-xs font-medium'>
        <Link
          to={'/Statement/BetListApp'}
          className={`py-2 text-center rounded  transition-colors ${pathname === '/Statement/BetListApp' ? 'bg-screenTab-active ' : 'bg-screenTab hover:bg-screenTab-hover'
            }`}
        >
          Bảng Cược
        </Link>
        <Link
          to={'/Statement/AllStatement'}
          className={`py-2 text-center rounded  transition-colors ${pathname === '/Statement/AllStatement' ? 'bg-screenTab-active ' : 'bg-screenTab hover:bg-screenTab-hover'
            }`}
        >
          Sao Kê
        </Link>
        <Link
          to={'/Statement/Result'}
          className={`py-2 text-center rounded  transition-colors ${pathname === '/Statement/Result' ? 'bg-screenTab-active ' : 'bg-screenTab hover:bg-screenTab-hover'
            }`}
        >
          Kết quả
        </Link>
        <Link
          to={'/Statement/MessageHistory'}
          className={`py-2 text-center rounded  transition-colors ${pathname === '/Statement/MessageHistory' ? 'bg-screenTab-active ' : 'bg-screenTab hover:bg-screenTab-hover'
            }`}
        >
          Nhật Ký Tin Nhắn
        </Link>
        <Link
          to={'/Statement/AccountAndStatememt'}
          className={`py-2 text-center rounded  transition-colors ${pathname === '/Statement/AccountAndStatememt'
            ? 'bg-screenTab-active '
            : 'bg-screenTab hover:bg-screenTab-hover'
            }`}
        >
          Cài Đặt
        </Link>
      </div>
    </header>
  )
}

export default ScreenHeader
