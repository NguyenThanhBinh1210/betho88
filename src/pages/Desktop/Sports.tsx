import Select from '~/components/Select'
const betOptions: string[] = [
  'Tất Cả',
  '1X2',
  'Tỷ Số Chính Xác',
  'Lẻ/Chẵn',
  'Tổng Số Bàn Thắng',
  'Hiệp 1/Toàn Trận',
  'Chẵn / Lẻ của Nửa trận/Toàn trận',
  'Bàn thắng Đầu/ Cuối',
  'Cá Cược Tổng Hợp',
  'Cược Thắng'
]
const matchesArray = ['Tất cả trận đấu', 'Các trận đấu chính', 'Thị trường khác']

const upcomingEventsArray = [
  'Sắp diễn ra',
  '4 giờ tới',
  '8 giờ tới',
  'Hiện nay ~ 04:00',
  '04:00 ~ 08:00',
  '08:00 ~ 12:00'
]
const Sports = () => {
  return (
    <div className='py-2 text-[13px]'>
      <div className='px-2'>
        <div className='flex items-center gap-x-2 border-b border-borderColor-900 pb-1'>
          <div className='font-bold flex items-center'>
            <div className='size-[22px]'></div>
            <p className='text-textOpacity-800'>Bóng đá / Hôm nay</p>
          </div>
          <Select
            placement='left'
            options={betOptions}
            defaultValue='Tất Cả'
            classNameButton='bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none'
          />
        </div>
        <div className='flex items-center gap-x-2  py-1'>
          <Select
            options={matchesArray}
            defaultValue='Bộ lọc trận đấu'
            classNameButton='bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none'
          />
          <Select
            options={matchesArray}
            defaultValue='Tất cả trận đấu'
            classNameButton='bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none'
          />
          <Select
            options={upcomingEventsArray}
            defaultValue='Từ trước đến nay'
            classNameButton='bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none'
          />
          <button
            className={`flex items-center border-[#ffffff52] border justify-between px-1.5  transition-all rounded-sm  bg-primary text-textOpacity !h-[22px] py-0 min-w-0 gap-x-2 border-none`}
          >
            (55/55) Giải
          </button>
        </div>
        <div className='flex items-center gap-x-2 border-b border-borderColor-900  py-1 mb-1'>
          <div className='rounded border border-borderColor-1000 hover:border-textActive overflow-hidden p-1 h-40 w-[325px] relative'>
            <div
              className='absolute bg-primary/40  top-0 left-0 w-full h-full'
              style={{ transform: 'skew(-31deg) translate(-64%, 0%)' }}
            ></div>
            <div className='relative'>
              <div className='w-full flex items-center'>
                <div className='h-[0.5px] w-[75px] -translate-y-0.5 bg-borderColor'></div>
                <p className='uppercase font-light text-textOpacity-800  pb-1 mx-auto text-center leading-7 w-[160px] line-clamp-1'>
                  Cúp Quốc gia thuỵ điển
                </p>
                <div className='h-[0.5px] w-[75px] -translate-y-0.5 bg-borderColor'></div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='w-[114.48px] text-center text-xs text-textOpacity-800'>FC Jarasdasd</div>
                <div className='text-center leading-4'>
                  <p className='uppercase text-textLive'>Trực tiếp</p>
                  <p className='text-textOpacity-800'>12:00AM</p>
                </div>
                <div className='w-[114.48px] text-center text-xs text-textOpacity-800'>FC Jarasdasd</div>
              </div>
              <div className='grid grid-cols-2 gap-1.5 mt-2 px-2'>
                <div className='space-y-1'>
                  <p className='font-medium text-textOpacity-800 text-center '>Cược chấp</p>
                  <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-1 font-medium'>
                        <p className='uppercase'>H</p>
                        <p className='uppercase'>+3.66</p>
                      </div>
                      <div className='font-medium text-textOpacity-800'>0.65</div>
                    </div>
                  </div>
                  <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-1 font-medium'>
                        <p className='uppercase'>A</p>
                        <p className='uppercase '>-3.66</p>
                      </div>
                      <div className='font-medium text-textDanger'>0.65</div>
                    </div>
                  </div>
                </div>
                <div className='space-y-1'>
                  <p className='font-medium text-textOpacity-800 text-center '>Tài/Xỉu</p>
                  <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-1 font-medium'>
                        <p className=''>o</p>
                        <p className='uppercase'>3.66</p>
                      </div>
                      <div className='font-medium text-textDanger '>0.65</div>
                    </div>
                  </div>
                  <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-1 font-medium'>
                        <p className=''>u</p>
                        <p className='uppercase '>3.66</p>
                      </div>
                      <div className='font-medium text-textOpacity-800'>0.65</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-x-2   py-1 mb-1'>
          <div className='space-x-2'>
            <button className='bg-buttonTab-active rounded px-2 py-0.5 text-textOpacity-800 text-xs'>Tất cả</button>
            <button className='bg-buttonTab hover:bg-buttonTab-hover transition-all rounded px-2 py-0.5 text-textOpacity-800 text-xs'>Phạt góc</button>
            <button className='bg-buttonTab hover:bg-buttonTab-hover transition-all rounded px-2 py-0.5 text-textOpacity-800 text-xs'>Thẻ phạt</button>
          </div>
        </div>
        <div className='bg-gradient-to-b from-primary to-background rounded flex'>
          <button className='w-6 flex justify-center items-center border-r border-borderColor-900'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </button>
          <div className='flex-1 flex items-center justify-between py-1.5'>
            <div className='flex items-center gap-1'>
              <div className='w-[22px]'></div>
              <p className='text-textOpacity-800 text-xs'>Trận đấu</p>
            </div>
            <div className='flex  items-center gap-1 pr-2'>
              <Select
                placement='left'
                options={betOptions}
                defaultValue='Lựa chọn bình thường'
                classNameButton='hover:bg-transparent text-xs !h-[20px] gap-2 !min-w-0'
              />
              <Select
                placement='left'
                options={betOptions}
                defaultValue='Hai dòng'
                classNameButton='hover:bg-transparent text-xs !h-[20px] gap-2 !min-w-0'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sports
