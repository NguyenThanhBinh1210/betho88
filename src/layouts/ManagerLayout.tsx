import { LayoutPropsInterface } from '~/types/base.type'
import MenuBar from './manager/MenuBar'

const ManagerLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div className='min-h-screen  bg-[#13191d] pb-[56px]'>
      {children}
      <MenuBar />
    </div>
  )
}

export default ManagerLayout
