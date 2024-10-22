import BaseTab from '~/components/Desktop/BaseTab'
import Select from '~/components/Select'

const Result: React.FC = () => {
  const { TabGroup, tabIndex } = BaseTab({ values: ['Kết quả', 'Cược thắng'] })
  return (
    <div>
      <div className='flex justify-between text-[13px]'>
        <h2 className='font-medium text-textOpacity-200 text-base'>Kết quả</h2>
      </div>
      <div className='text-[13px] mt-2'>{TabGroup}</div>
      {tabIndex === 0 && <TabResult />}
      {tabIndex === 1 && <TabWin />}
    </div>
  )
}

import DatePicker from '~/components/DatePicker'
import InfoIcon from '~/components/icons/InfoIcon'
import { useState } from 'react'
import Autocomplete from '~/components/Autocomplete'
const betOptions: string[] = [
  '1-0',
  '2-0',
  '2-1',
  '3-0',
  '3-1',
  '3-2',
  '4-0',
  '4-1',
  'Giải vô địch bóng đá thế giới ảo',
  '4-3',
  '0-0',
  '1-1',
  '2-2',
  '3-3',
  '4-4',
  'AOS'
]
const suggestions = ['Premier League', 'La Liga', 'Bundesliga', 'Serie A', 'Ligue 1'];

const TabResult = () => {
  const { TabGroup } = BaseTab({
    values: ['Hôm Nay', 'Hôm Qua'],
    className: '!p-1 text-textOpacity-200 font-normal rounded border border-transparent',
    wrapClassName: 'border-none gap-1 rounded-none'
  })

  return (
    <div>
      <div className='p-2 rounded-sm border text-[13px] bg-secondary border-screenBorder mt-1 space-y-1.5'>
        <div className='flex gap-1'>
          <DatePicker />
          <div className='w-[150px]'>{TabGroup}</div>
        </div>
        <div className='flex gap-1 flex-wrap'>
          <Select
            options={betOptions}
            classNameButton='text-textOpacity-200 !border-'
            placement='left'
            defaultValue='Bóng đá'
          ></Select>
          <Select
            options={betOptions}
            classNameButton='text-textOpacity-200'
            placement='left'
            defaultValue='Bóng đá'
          ></Select>
          <Autocomplete suggestions={suggestions} placement="left" />
        </div>
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse   overflow-hidden'>
          <thead className=''>
            <tr className='bg-screenBg-thead text-textOpacity-thread'>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Thời Gian Bắt Đầu</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Trận Đấu</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Hiệp 1</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Cuối cùng</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>
                <div className='px-2'></div>
              </th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Trạng thái </th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-borderColor-900'>
              <td colSpan={20} className='   '>
                <div className='bg-secondary text-[13px]   py-2 px-2 '>BỒ ĐÀO NHA LIGA REVELACAO U23</div>
              </td>
            </tr>
            <TbodyTr />
          </tbody>
        </table>
      </div>
      <div className='text-textOpacity-200 text-[13px] mt-2'>
        Lưu ý:
        <br />- Các cược đang chờ có thể cần thời gian để xử lý. Vui lòng xem thông tin trong Bảng Cược.
      </div>
    </div>
  )
}
const TabWin = () => {
  return <div>s</div>
}

const TbodyTr = () => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <>
      <tr className='bg-background border-b border-borderColor-900 hover:bg-secondary'>
        <td className=' text-[13px] border-r border-borderColor-900 py-2 px-2 text-textOpacity-200'>
          10/19/2024 05:00 PM
        </td>
        <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2 font-medium'>
          <span className='text-textActive'>Benfica U23</span> -vs- <span>CD Santa Clara U23</span>
        </td>
        <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2 font-medium text-center'>3-1</td>
        <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2  text-center'>-</td>
        <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2  text-center flex justify-center text-screenTab-active'>
          <button onClick={() => setShowInfo(!showInfo)} className='bg-white rounded-full cursor-pointer'>
            <InfoIcon />
          </button>
        </td>
        <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2 font-medium text-center'>
          Đang diễn ra
        </td>
      </tr>
      {showInfo && (
        <tr className={`border-b border-borderColor-900 bg-background overflow-hidden `}>
          <td colSpan={20}>
            <div className=' text-[13px]   py-2 px-2 '>
              <div className='w-full border border-borderColor-900'>
                <div className='text-center text-textOpacity-100 py-2 bg-secondary'>Thứ tự bàn thắng </div>
                <div className='text-center  py-2 font-medium'>H.H.A.H.H.H. </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default Result
