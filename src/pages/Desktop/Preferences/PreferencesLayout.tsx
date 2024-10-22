import { Link, useLocation } from 'react-router-dom'
import { LayoutPropsInterface } from '~/types/base.type'

const Preferences = [
  {
    path: 'AccountAndStatememt',
    title: 'Tài khoản'
  },
  {
    path: 'PageAndOddsDisplay',
    title: 'Hiển thị trang'
  },
  {
    path: 'CustomizeSportsPriorityDisplay',
    title: 'Tuỳ chỉnh thứ tự các môn thể thao'
  },
  {
    path: 'BetAndOdds',
    title: 'Cá cược'
  },
  {
    path: 'SportsBookBot',
    title: 'SportsBook Bot'
  },
  {
    path: 'OtherSettings',
    title: 'Cài đặt khác'
  }
]
const PreferencesLayout = ({ children }: LayoutPropsInterface) => {
  const pathname = useLocation().pathname
  return (
    <div className='flex gap-4'>
      <div className='w-[200px] text-[13px] '>
        <div className='font-medium py-2 px-2 text-xl'>Cài đặt</div>
        <ul className='w-full'>
          {Preferences.map((item, index) => (
            <li key={index} className='w-full'>
              <Link to={`/Preferences/${item.path}`} className={`${pathname === `/Preferences/${item.path}`
                ? 'bg-screenTab-active '
                : 'bg-screenTab hover:bg-screenTab-hover'
                } w-full block py-1.5 px-2 text-textOpacity-200 text-xs font-medium border-b border-borderColor-900`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex-1 mt-3'>{children}</div>
    </div>
  )
}

export default PreferencesLayout
