import { LayoutPropsInterface } from '~/types/base.type'
import DesktopTopbar from './DesktopTopbar'
import DesktopSidebar from './DesktopSidebar'
import { useContext } from 'react'
import { AppContext } from '~/contexts/app.context'
import DesktopRightbar from './DesktopRightbar'
const DesktopLayout = ({ children }: LayoutPropsInterface) => {
  const { theme } = useContext(AppContext)

  return (
    <div className={`${theme} bg-background flex flex-col text-foreground-50 transition-all min-h-screen`}>
      <DesktopTopbar />
      <div className='flex flex-1'>
        <DesktopSidebar />
        <div className='flex-1'>{children}</div>
        <DesktopRightbar />
      </div>
    </div>
  )
}

export default DesktopLayout
