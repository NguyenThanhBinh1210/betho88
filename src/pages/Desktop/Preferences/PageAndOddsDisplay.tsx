import Select from '~/components/Select'
const languageOptions: string[] = ['English', '繁體中文', '日本語', 'Tiếng Việt']
const typePageOptions: string[] = ['Một Dòng', 'Hai Dòng', 'Toàn Trận', 'Hiệp 1']
const sortOptions: string[] = ['Sắp xếp Bình thường', 'Xếp theo thời gian']
const typeMatchOptions: string[] = ['Tất cả trận đấu', 'Các trận đấu chính']
const PageAndOddsDisplay = () => {
  return (
    <div>
      <div className='flex justify-between text-[13px]'>
        <h2 className='font-medium text-textOpacity-200 text-base'>Hiển thị trang</h2>
      </div>
      <div className='rounded-sm border border-screenBorder py-10 mt-2 text-[13px] text-textOpacity-200 space-y-2 '>
        <div className='flex flex-col gap-2 w-max mx-auto'>
          <div className='flex gap-2 text-[11px] pt-3 items-center'>
            <label className='font-semibold w-[200px] text-end '>Ngôn ngữ hiển thị</label>
            <div className='w-60 text-textActive text-xs'>
              <Select
                options={languageOptions}
                defaultValue='Tiếng Việt'
                classNameButton='w-full bg-background border-none'
              ></Select>
            </div>
          </div>
          <div className='flex gap-2 text-[11px] pt-3 items-center'>
            <label className='font-semibold w-[200px] text-end '>Loại trang</label>
            <div className='w-60 text-textActive text-xs'>
              <Select
                options={typePageOptions}
                defaultValue='Hai Dòng'
                classNameButton='w-full bg-background border-none'
              ></Select>
            </div>
          </div>
          <div className='flex gap-2 text-[11px] pt-3 items-center'>
            <label className='font-semibold w-[200px] text-end '>Sắp xếp sự kiện mặc định</label>
            <div className='w-60 text-textActive text-xs'>
              <Select
                options={sortOptions}
                defaultValue='Xếp theo thời gian'
                classNameButton='w-full bg-background border-none'
              ></Select>
            </div>
          </div>
          <div className='flex gap-2 text-[11px] pt-3 items-center'>
            <label className='font-semibold w-[200px] text-end '>Loại thị trường</label>
            <div className='w-60 text-textActive text-xs'>
              <Select
                options={typeMatchOptions}
                defaultValue='Tất cả trận đấu'
                classNameButton='w-full bg-background border-none'
              ></Select>
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-x-2 pt-6'>
          <button className='bg-screenTab-active w-max px-12 text-xs py-1 text-foreground hover:bg-opacity-90 rounded'>
            Gửi
          </button>
          <button className='bg-screenTab-active/50 w-max  px-12 text-xs py-1 text-foreground hover:bg-opacity-90 rounded'>
            Khôi Phục
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageAndOddsDisplay
