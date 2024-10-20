import { useContext } from 'react'
import { AppContext } from '~/contexts/app.context'
import { LayoutPropsInterface } from '~/types/base.type'
import ScreenHeader from './ScreenLayout/ScreenHeader'
import ScreenFooter from './ScreenLayout/ScreenFooter'

const ScreenLayout = ({ children }: LayoutPropsInterface) => {
  const { theme } = useContext(AppContext)

  return (
    <div className={`${theme} bg-background flex flex-col text-foreground-50 transition-all min-h-screen  `}>
      <ScreenHeader />
      <div className='flex-1 bg-screenBg flex flex-col justify-between'>
        <div className='px-3 py-6'>{children}</div>
        <ScreenFooter />
      </div>
    </div>
  )
}

export default ScreenLayout
