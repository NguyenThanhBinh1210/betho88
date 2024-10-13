import Chip from '~/components/Chip/Chip'
import AccordionInTab from '../AccordionInTab'

const SecondHalfAccuracyRatio = () => {
  return (
    <AccordionInTab title='Tỉ số chính xác hiệp 2'>
      <div className='grid grid-cols-[repeat(11,minmax(0,1fr))] pt-1 gap-x-1.5'>
        {['1-0', '2-0', '2-1', '3-0', '3-1', '3-2'].map((item, index) => (
          <div key={index} className='space-y-1.5'>
            <p className='text-center text-xs text-textOpacity-200 '>{item}</p>
            <div className='flex flex-col justify-center space-y-1.5'>
              <Chip value='2.33' />
              <Chip disable value='2.33' />
            </div>
          </div>
        ))}
        {['0-0', '1-1', '2-2', '3-3', 'AOS'].map((item, index) => (
          <div key={index} className='space-y-1.5 '>
            <p className='text-center text-xs text-textOpacity-200 '>{item}</p>
            <div className='flex flex-col justify-center translate-y-1/2'>
              <Chip value='2.33' />
            </div>
          </div>
        ))}
      </div>
    </AccordionInTab>
  )
}

export default SecondHalfAccuracyRatio
