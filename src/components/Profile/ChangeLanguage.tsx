const ChangeLanguage = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
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
        <p className='text-sm font-medium'>Ngôn ngữ</p>
      </div>
      <div className='mt-3 text-sm bg-[#212a31]'>
        <div className='flex items-center p-3 border-b border-[#ffffff1f]'>
          <p>English</p>
        </div>
        <div className='flex items-center p-3 border-b border-[#ffffff1f]'>
          <p>繁體中文</p>
        </div>
        <div className='flex items-center p-3 border-b border-[#ffffff1f]'>
          <p>日本語</p>
        </div>
        <div className='flex items-center p-3 border-b border-[#ffffff1f] justify-between'>
          <p>Tiếng Việt</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4 text-[#19e5e6]'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ChangeLanguage
