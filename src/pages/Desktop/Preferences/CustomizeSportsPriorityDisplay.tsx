import BarIcon from '~/components/icons/BarIcon'

interface Sport {
  key: string
  content: string
}
const initialSports: Sport[] = [
  { key: '1', content: 'Bóng đá' },
  { key: '2', content: 'Poker' },
  { key: '3', content: 'Bóng rổ' },
  { key: '4', content: 'Thể Thao Điện Tử' },
  { key: '5', content: 'Bitcoin' },
  { key: '6', content: 'Quần vợt' },
  { key: '7', content: 'Cầu lông' },
  { key: '8', content: 'Cricket' },
  { key: '9', content: 'Kabaddi' },
  { key: '10', content: 'Bóng chuyền' },
  { key: '11', content: 'Bóng chuyền bãi biển' },
  { key: '12', content: 'Bóng bàn' },
  { key: '13', content: 'Snooker/Pool' },
  { key: '14', content: 'Bóng chày' },
  { key: '15', content: 'Bóng bầu dục Mỹ' },
  { key: '16', content: 'Khúc côn cầu trên băng' },
  { key: '17', content: 'Winter Sports' },
  { key: '18', content: 'Khúc côn cầu trên cỏ' },
  { key: '19', content: 'Bóng bầu dục' },
  { key: '20', content: 'Thể Thao Môtô' },
  { key: '21', content: 'Quyền anh' },
  { key: '22', content: 'Quyền Thái' },
  { key: '23', content: 'Đánh Golf' },
  { key: '24', content: 'Netball' },
  { key: '25', content: 'Bóng đá bãi biển' },
  { key: '26', content: 'Bóng ném' },
  { key: '27', content: 'Ném phi tiêu' },
  { key: '28', content: 'Cờ vua' },
  { key: '29', content: 'Squash' },
  { key: '30', content: 'Điền kinh' },
  { key: '31', content: 'Bơi lội' },
  { key: '32', content: 'Đua ngựa' },
  { key: '33', content: 'Lặn' },
  { key: '34', content: 'Bắn cung' },
  { key: '35', content: 'Canoeing' },
  { key: '36', content: 'Đua xe đạp' },
  { key: '37', content: 'Cưỡi ngựa' },
  { key: '38', content: 'Đấu kiếm' },
  { key: '39', content: 'Thể dục' },
  { key: '40', content: 'Judo' },
  { key: '41', content: 'M. Pentathlon' },
  { key: '42', content: 'Rowing' },
  { key: '43', content: 'Đua thuyền buồm' },
  { key: '44', content: 'Bắn súng' },
  { key: '45', content: 'Taekwondo' },
  { key: '46', content: 'Triathlon' },
  { key: '47', content: 'Cử tạ' },
  { key: '48', content: 'Đấu vật' },
  { key: '49', content: 'Bóng đá trong nhà' },
  { key: '50', content: 'Cầu mây' },
  { key: '51', content: 'Trượt Tuyết Đổ Đèo' },
  { key: '52', content: 'Khúc Côn Cầu Nga' },
  { key: '53', content: 'Hai Môn Phối Hợp' },
  { key: '54', content: 'Bi Đá Trên Băng' },
  { key: '55', content: 'Trượt Băng Nghệ Thuật' },
  { key: '56', content: 'Trượt Tuyết Tự Do' },
  { key: '57', content: 'Trượt Băng Nằm Ngửa' },
  { key: '58', content: 'Trượt Băng Nằm Sấp' },
  { key: '59', content: 'Trượt Tuyết Nhảy Xa' },
  { key: '60', content: 'Trượt Băng Tốc Độ' },
  { key: '61', content: 'Môn thể thao khác' },
  { key: '62', content: 'Chính trị' },
  { key: '63', content: 'Tài chính' },
  { key: '64', content: 'Lô tô' },
  { key: '65', content: 'Giải Trí' },
  { key: '66', content: 'Olympic' }
]

const CustomizeSportsPriorityDisplay = () => {
  return (
    <div>
      <div className='flex justify-between text-[13px]'>
        <h2 className='font-medium text-textOpacity-200 text-base'>Tùy chỉnh thứ tự các môn thể thao</h2>
      </div>
      <div className='rounded-sm border border-screenBorder py-6 px-5 mt-2 text-[13px] text-textOpacity-200 space-y-2 '>
        <p className='pb-4 border-b border-screenBorder'>
          Hãy kéo các môn thể thao để thay đổi thứ tự của menu các môn thể thao như mong muốn.
        </p>
        <ul style={{ columnCount: 4, counterReset: 'section' }} className='gap-x-4 gap-y-1 pt-2'>
          {initialSports.map((item, index) => (
            <li className='flex items-center gap-1 w-full mb-2'>
              <span className='w-5 text-end'>{index + 1}.</span>
              <div className='flex-1 bg-screenBg-thead text-xs hover:bg-screenBg-empty border border-screenBorder rounded-sm flex justify-between py-0.5 px-1.5 items-center'>
                <span>{item.content}</span>
                <button>
                  <BarIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CustomizeSportsPriorityDisplay
