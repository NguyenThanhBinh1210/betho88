import { Link, useLocation } from 'react-router-dom'
import { menuController, menuController2 } from '~/constants/renaral.const'

const MenuBar = () => {
  const location = useLocation().pathname
  const search = useLocation().search
  const supLocation = `${location + search}`
  const renderMenu = location === '/sport' || location === '/follow' ? menuController2 : menuController
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(180deg, HSL( 205, 80%, 20% ) 0, HSL( 205, 80%, 20% ) 50%, HSL( 205, 20%, 8%))'
      }}
      className={`fixed bottom-0 left-0 w-full h-[56px] grid  ${
        (location === '/sport' || location === '/follow') && 'grid-cols-6'
      } grid-cols-5 gap-x-4 `}
    >
      {renderMenu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={` 
          ${
            item.path === location || item.path === supLocation ? 'text-[#19e5e6]' : 'text-[#ffffff61]'
          } text-xs flex flex-col items-center gap-1 py-1.5`}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default MenuBar
