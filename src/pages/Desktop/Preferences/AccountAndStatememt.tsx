const AccountAndStatememt = () => {
  return (
    <div>
      <div className='flex justify-between text-[13px]'>
        <h2 className='font-medium text-textOpacity-200 text-base'>Tài khoản</h2>
      </div>
      <div className='rounded-sm border border-screenBorder py-10 mt-2 text-[13px] text-textOpacity-200 space-y-2 '>
        <div className='flex flex-col gap-2 w-max mx-auto'>
          <div className='flex   gap-2 text-[11px] pt-3'>
            <label htmlFor='confirmPassword' className='font-semibold w-[200px] text-end '>
              Thay đổi mật khẩu tài khoản
            </label>
            <div className='w-60 text-textActive'></div>
          </div>
          <div className='flex items-center  gap-2 text-[11px]'>
            <label htmlFor='currentPassword' className='w-[200px] text-end '>
              Mật khẩu hiện tại
            </label>
            <input
              id='currentPassword'
              type='password'
              className='bg-background rounded-sm w-60 text-[13px] text-foreground py-0.5 px-2'
            />
          </div>
          <div className='flex items-center  gap-2 text-[11px]'>
            <label htmlFor='newPassword' className='w-[200px] text-end '>
              Mật khẩu mới
            </label>
            <input
              id='newPassword'
              type='password'
              className='bg-background rounded-sm w-60 text-[13px] text-foreground py-0.5 px-2'
            />
          </div>
          <div className='flex items-center  gap-2 text-[11px]'>
            <label htmlFor='confirmPassword' className='w-[200px] text-end '>
              Xác nhận mật khẩu
            </label>
            <input
              id='confirmPassword'
              type='password'
              className='bg-background rounded-sm w-60 text-[13px] text-foreground py-0.5 px-2'
            />
          </div>
          <div className='flex   gap-2 text-[11px] pt-3 pb-6'>
            <label htmlFor='confirmPassword' className='w-[200px] text-end '></label>
            <div className='w-60 text-textActive'>
              *Mật khẩu có phân biệt chữ hoa, chữ thường và phải dài từ 6 đến 10 ký tự.
            </div>
          </div>
          <div className='flex items-center  gap-2 text-[11px]'>
            <label htmlFor='confirmPassword' className='font-semibold w-[200px] text-end '>
              Đặt biệt danh
            </label>
            <input
              id='confirmPassword'
              type='password'
              className='bg-background rounded-sm w-60 text-[13px] text-foreground py-0.5 px-2'
            />
          </div>
          <div className='flex   gap-2 text-[11px] pt-3 pb-6'>
            <label htmlFor='confirmPassword' className='w-[200px] text-end  '></label>
            <div className='w-60 text-textActive'>
              *Bạn có thể đặt biệt danh để hiển thị và đăng nhập (từ 5 đến 15 chữ cái hoặc số) Xin lưu ý, bạn chỉ có thể
              đặt biệt danh này một lần duy nhất. Bạn không thể thay đổi hoặc hủy biệt danh sau khi đã đặt.
            </div>
          </div>
          <button className='bg-screenTab-active w-max mx-auto px-12 text-xs py-1 text-foreground hover:bg-opacity-90 rounded'>
            Gửi
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccountAndStatememt
