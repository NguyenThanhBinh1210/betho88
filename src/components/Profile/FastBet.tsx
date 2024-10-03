import { Switch } from '@nextui-org/react'

const FastBet = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
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
        <p className='text-sm font-medium'>Tiền cược nhanh</p>
      </div>
      <div className='mt-3 text-sm bg-[#212a31]'>
        <div className='flex items-center p-3 border-b border-[#ffffff1f] justify-between'>
          <p>Tuỳ chỉnh</p>
          <Switch></Switch>
        </div>
        <div className='p-3 space-y-2'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex items-center border border-[#19e5e6] rounded bg-[#182025]'>
              <div className='w-[35px] flex justify-center py-2 border-r border-[#19e6e62e]'>UT</div>
              <div className='flex-1 px-3'>
                <input type='text' value={'3'} className='w-full text-end text-white' />
              </div>
            </div>
            <div className='flex items-center border border-[#ffffff29] rounded bg-[#182025]'>
              <div className='w-[35px] flex justify-center py-2 border-r border-[#ffffff29]'>UT</div>
              <div className='flex-1 px-3'>
                <input type='text' value={'3'} className='w-full text-end text-white' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-7 gap-2'>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              1
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              2
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              3
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              4
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              5
            </div>
            <div
              className='col-span-2 font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z'
                />
              </svg>
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              6
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              7
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              8
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              9
            </div>
            <div
              className='font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              0
            </div>
            <div
              className='col-span-2 font-medium rounded flex items-center justify-center cursor-pointer h-[42px]'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              Xoá
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FastBet
