import { Button } from '@nextui-org/react'
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
  return (
    <div className='bg-gradient-to-b from-[#0b3959] to-[#13191d]'>
      <div className='flex justify-between px-2'>
        <p className='text-purple-50 text-3xl'>Logo</p>
        <Button variant='light' className='text-white'>
          <div className='text-sm text-start'>
            <p>123123123</p>
            <p className='text-xs pl-2'>UT 0.00</p>
          </div>
        </Button>
      </div>
      <Sliders sliderData={data} />
    </div>
  )
}

export default Header
