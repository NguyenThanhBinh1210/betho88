import { useState } from 'react'

const HelpNewbie = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [functionActive, setFunctionActive] = useState<string>('')
  console.log(functionActive)
  return (
    <div
      className={`fixed top-0 ${
        show ? 'left-0' : 'left-full'
      } transition-all duration-400 w-full h-full bg-[#101518] text-white z-40`}
    >
      <div className='flex items-center gap-3  py-2 border-b border-[#ffffff1f] bg-[#0a3a5c]'>
        <button onClick={onClose} className='ml-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18' />
          </svg>
        </button>
        <p className='text-sm font-medium'>Người mới giúp đỡ</p>
      </div>
      <div className='mt-3 text-sm bg-[#212a31]'>
        <div
          onClick={() => setFunctionActive('cach-dat-cuoc')}
          className='flex items-center p-3 border-b cursor-pointer border-[#ffffff1f] justify-between'
        >
          <p>Cách đặt cược</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </div>
        <div
          onClick={() => setFunctionActive('cac-loai-cuoc')}
          className='flex items-center p-3 border-b cursor-pointer border-[#ffffff1f] justify-between'
        >
          <p>Các loại cược</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </div>
        <div
          onClick={() => setFunctionActive('cac-loai-ti-le-cuoc')}
          className='flex items-center p-3 border-b cursor-pointer border-[#ffffff1f] justify-between'
        >
          <p>Các loại tỉ lệ cược</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </div>
      </div>
      {/* <HelpNewbie show={functionActive === 'help-newbie'} onClose={() => setFunctionActive('')} /> */}
    </div>
  )
}

export default HelpNewbie