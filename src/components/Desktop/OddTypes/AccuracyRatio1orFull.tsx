import AccordionInTab from '../AccordionInTab'
import Select from '~/components/Select'
import { useState } from 'react'
import Chip from '~/components/Chip/Chip'
import ChipDouple from '~/components/Chip/ChipDouple'
const betOptions: string[] = [
  '1-0',
  '2-0',
  '2-1',
  '3-0',
  '3-1',
  '3-2',
  '4-0',
  '4-1',
  '4-2',
  '4-3',
  '0-0',
  '1-1',
  '2-2',
  '3-3',
  '4-4',
  'AOS'
]
const AccuracyRatio1orFull = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <AccordionInTab title='Tỉ số chính xác hiệp 1/Cả trận'>
      <div className='grid grid-cols-3 pt-1 gap-1.5 '>
        <div className='space-y-1'>
          <p className='text-center text-textOpacity-200'>Hiệp 1</p>
          <Select options={betOptions} defaultValue='0-0' classNameButton='w-full border-primary'></Select>
        </div>
        <div className='space-y-1'>
          <p className='text-center text-textOpacity-200'>Cả trận</p>
          <Select options={betOptions} defaultValue='0-0' classNameButton='w-full border-primary'></Select>
        </div>
        <div className='space-y-1'>
          <p className='text-center text-textOpacity-200'>Tỷ lệ</p>
          <div className='grid grid-cols-3 gap-2'>
            <div className='col-span-2'>
              <Chip value='3.66'></Chip>
            </div>
            <button
              className={`flex items-center border-[#ffffff52] border-primary border justify-between px-1 text-textOpacity-800 h-[28px]  text-xs transition-all rounded-sm `}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className='flex items-center gap-x-1'>
                <p> {isOpen ? 'Ẩn tất cả' : 'Hiển thị tất cả'}</p>
              </div>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={2}
                  stroke='currentColor'
                  className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div
          className={`col-span-3 rounded border border-borderColor-900 text-textOpacity-900 px-1.5 overflow-hidden  transition-max-height ease-in-out duration-400 ${
            isOpen ? 'max-h-screen py-2' : 'max-h-0'
          }`}
        >
          <p className='text-center mb-2'>Tỷ Số Chính Xác Hiệp 1/Cả Trận</p>
          <div className='grid grid-cols-4 gap-1.5 text-xs'>
            {Array(30)
              .fill(0)
              .map((item) => (
                <ChipDouple key={item} value='344' ratio='0-3 / 2-4'></ChipDouple>
              ))}
          </div>
        </div>
      </div>
    </AccordionInTab>
  )
}

export default AccuracyRatio1orFull
