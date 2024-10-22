import { useContext } from 'react'
import logo from '~/assets/icons/logo_vn_w.svg'
import Select from '~/components/Select'
import Switch from '~/components/Switch'
import { AppContext } from '~/contexts/app.context'
const languages = ['English', '繁體中文', '日本語', 'Tiếng Việt']
const themes = ['classic-1', 'classic-2', 'modern-1', 'modern-2', 'modern-3', 'modern-4', 'modern-5', 'modern-6']
const communicationOptions: string[] = ['Letstalk', 'Zalo', 'Hỗ trợ', 'Skype']

const categories: string[] = [
  'Thể Thao',
  'Saba PinGoal',
  'Thể Thao Điện Tử',
  'Cổng Game SABA',
  'Number Game',
  'Live Casino',
  'Sòng bạc',
  'RNG Keno/Xổ số',
  'Thể Thao Ảo'
]
const bettingOddsTypes: string[] = ['Tỷ lệ cược Decimal', 'Tỷ lệ cược MALAY', 'Tỷ lệ cược HK']

const openFullScreenWindow = (path: string) => {
  const width = window.screen.width / 2 // Lấy chiều rộng của màn hình
  const height = window.screen.height // Lấy chiều cao của màn hình

  window.open(
    `http://localhost:3000/${path}`,
    '_blank',
    `noopener,noreferrer,width=${width},height=${height},left=0,top=0,resizable=yes`
  )
}

const DesktopTopbar = () => {
  const { setTheme } = useContext(AppContext)
  const handleChangeThemes = (theme: string) => {
    setTheme(theme)
  }
  return (
    <header className='bg-primary text-[13px] h-[112px] sticky top-0 z-[55]'>
      <div className='flex border-b border-background'>
        <div className='w-[242px]  flex-shrink-0 px-2.5  '>
          <img className='w-full h-full object-cover scale-90' src={logo} alt='logo' loading='lazy' />
        </div>
        <div className='py-1.5 flex flex-col justify-between'>
          <div className='flex gap-x-2 pr-2'>
            <div className='bg-[#00000029] h-[28px] rounded-sm line-clamp-1 flex-1  text-foreground-300 px-2 py-1.5'>
              Do gần đây công ty phát hiện nhiều thành viên liên quan các loại hình thức cá cược bất thường khác nhau
              hoặc Hành vi gian lận ( Đánh hàng theo nhóm , Đánh hàng sập giá, cá cược theo nhóm , buôn com ,sử dụng
              phần mềm cá cược, bất kỳ hành vi nào ảnh hưởng đến hoạt động bình thường của công ty vv...) Công ty thông
              báo đến quý thành viên , nếu quý thành viên nào bị công ty phát hiện và phán quyết rằng có cá cược bất
              thường ảnh hưởng tới hoạt động bình thường của công ty , Công ty có quỵền hủy các vé cược bất thường đó ,
              đồng thời công ty sẽ không chịu trách nhiệm tất cả những thiệt hại gây ra ! Xin cám ơn quý khách .
            </div>
            <div className='space-x-2 flex'>
              <Select options={themes} defaultValue='Màu sắc chủ đề' onChange={handleChangeThemes} />
              <Select options={languages} defaultValue='Tiếng Việt' />
              {/* <Select options={betOptions} defaultValue="Tất Cả" classNameButton='bg-primary text-textOpacity h-[22px] min-w-0 gap-x-2 border-none' /> */}
              <button className='bg-background hover:text-foreground transition-all hover:bg-opacity-80 text-foreground-400 w-[128px] h-[28px] rounded-sm'>
                Đăng xuất
              </button>
            </div>
          </div>
          <div className='flex'>
            {categories.map((item) => (
              <div
                className={`relative cursor-pointer font-bold hover:text-textActive text-sm px-5 ${item === 'Thể Thao' ? 'text-textActive' : ''
                  }`}
              >
                {item}
                <div
                  className={`w-full absolute h-1 bg-textActive -bottom-1.5 left-0 ${item === 'Thể Thao' ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='px-2 py-2 flex'>
        <p className=' text-xs w-[242px] text-center'>07:43:19PM Oct 10, 2024 GMT +7</p>
        <div className='flex justify-between items-center flex-1 '>
          <div>
            <div className='w-[224px] bg-bgInput hover:bg-bgInput-900 transition-all text-[13px] py-1 px-2 rounded flex justify-between'>
              <input type='text' placeholder='Tìm kiếm' />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                />
              </svg>
            </div>
          </div>
          <div className='text-textOpacity-100 space-x-2 flex items-center'>
            <button
              onClick={() => openFullScreenWindow('Statement/BetListApp')}
              className=' hover:text-foreground transition-all hover:bg-background   h-[22px] px-2 rounded'
            >
              Bảng cược
            </button>
            <button
              onClick={() => openFullScreenWindow('Statement/AllStatement')}
              className=' hover:text-foreground transition-all hover:bg-background   h-[22px] px-2 rounded'
            >
              Sao kê
            </button>
            <button
              onClick={() => openFullScreenWindow('Result')}
              className=' hover:text-foreground transition-all hover:bg-background   h-[22px] px-2 rounded'
            >
              Kết quả
            </button>
            <button className=' hover:text-foreground transition-all hover:bg-background   h-[22px] px-2 rounded'>
              Cài đặt
            </button>
            <Select
              className='!z-40'
              options={communicationOptions}
              defaultValue='Hỗ trợ trực tiếp'
              classNameButton='!py-0 h-[22px] gap-x-2 !min-w-0 !hover:text-white hover:bg-background border-none !text-textOpacity'
            />
            <Select
              className='!z-40'
              options={bettingOddsTypes}
              defaultValue='Tỷ lệ cược MALAY'
              classNameButton='!py-0 h-[22px] gap-x-2 !min-w-0 !hover:text-white hover:bg-background border-none !text-textOpacity'
            />
            <Switch label='Cược Nhanh' isChecked={false} />
            <button className=' hover:text-foreground transition-all hover:bg-background   h-[22px] px-2 rounded'>
              Sportsbook Bot
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DesktopTopbar
