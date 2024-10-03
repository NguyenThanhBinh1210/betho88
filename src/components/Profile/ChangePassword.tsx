const ChangePassword = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
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
        <p className='text-sm font-medium'>Cài đặt mật khẩu</p>
      </div>
      <div className='mt-3 text-sm bg-[#212a31]'>
        <form className=' text-white  '>
          <div className='flex items-center p-3 border-b border-[#ffffff1f]'>
            <p>Mật khẩu hiện tại</p>
            <input type='password' className='flex-1 text-end' placeholder='Mật khẩu hiện tại' />
          </div>
          <div className='flex items-center p-3 border-b border-[#ffffff1f]'>
            <p>Mật khẩu mới</p>
            <input type='password' className='flex-1 text-end' placeholder='Mật khẩu mới' />
          </div>
          <div className='flex items-center p-3 border-b border-[#ffffff1f]'>
            <p>Xác nhận mật khẩu</p>
            <input type='password' className='flex-1 text-end' placeholder='Xác nhận mật khẩu' />
          </div>
          <div className='flex items-center p-3 border-b border-[#ffffff1f]'>
            <button className='rounded w-full bg-[#0a3a5c] py-2 font-medium'>Thay đổi </button>
          </div>
        </form>
      </div>
      <p className='mt-2 px-3 text-sm'>
        <span className='text-red-600'>*</span>{' '}
        <span className='text-gray-400'>Tối thiểu 6 ký tự (tối đa 10) và cAsE sEnSiTiVe.</span>
      </p>
    </div>
  )
}

export default ChangePassword
