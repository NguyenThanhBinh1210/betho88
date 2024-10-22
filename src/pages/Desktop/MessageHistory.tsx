import DatePicker from '~/components/DatePicker'
import BaseTab from '~/components/Desktop/BaseTab'

const MessageHistory = () => {
  const { TabGroup, tabIndex } = BaseTab({
    values: ['Thông Báo Thông Thường', 'Thông Báo Đặc Biệt', 'Tin Nhắn Cá Nhân']
  })

  return (
    <div>
      <div className='flex justify-between text-[13px]'>
        <h2 className='font-medium text-textOpacity-200 text-base'>Nhật Ký Tin Nhắn</h2>
      </div>
      <div className='text-[13px] mt-2'>{TabGroup}</div>
      {tabIndex === 0 && <MessageNormal />}
      {tabIndex === 1 && <MessageSpecial />}
      {tabIndex === 2 && <MessageIndividual />}
    </div>
  )
}

const MessageNormal = () => {
  return (
    <div>
      <div className='p-2 rounded-sm border text-[13px] bg-secondary border-screenBorder mt-1 space-y-1.5'>
        <div className='flex gap-3 items-center'>
          <DatePicker />
          <p className='text-textOpacity-200'>Đến</p>
          <DatePicker />
        </div>
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse   overflow-hidden'>
          <thead className=''>
            <tr className='bg-screenBg-thead text-textOpacity-thread'>
              <th className='py-2 px-2 text-center border-r border-screenBorder-thread'>Số.</th>
              <th className='py-2 px-2 text-center border-r border-screenBorder-thread'>ID</th>
              <th className='py-2 px-2 text-start border-r border-screenBorder-thread'>Ngày</th>
              <th className='py-2 px-2 text-start border-r border-screenBorder-thread'>Tin nhắn</th>
            </tr>
          </thead>
          <tbody>
            {Array(40)
              .fill(0)
              .map((_, index) => (
                <tr
                  key={index}
                  className='odd:bg-background even:bg-secondary border-b border-borderColor-900 hover:bg-secondary cursor-pointer'
                >
                  <td className=' text-[13px] border-r border-borderColor-900 py-2 px-2 text-textOpacity-200'>
                    {index + 1}
                  </td>
                  <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2 font-medium'>1993715</td>
                  <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2 font-medium text-textOpacity-200 w-max'>
                    10/21/2024 6:23:09 PM
                  </td>
                  <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2  '>
                    Attn:[Tennis] Due to player retirement, "Aliaksandra Sasnovich -vs- Leylah Fernandez (CAN)" [WTA -
                    Pan Pacific Open - 21/10], all bets taken are considered REFUNDED (Except Set 1 & 2 winner and those
                    products which have been determined the win loss). Parlay counted as one(1). Thank you!
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
const MessageSpecial = () => {
  return (
    <div>
      <div className='p-2 rounded-sm border text-[13px] bg-secondary border-screenBorder mt-1 space-y-1.5'>
        <div className='flex gap-3 items-center'>
          <DatePicker />
          <p className='text-textOpacity-200'>Đến</p>
          <DatePicker />
        </div>
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse   overflow-hidden'>
          <thead className=''>
            <tr className='bg-screenBg-thead text-textOpacity-thread'>
              <th className='py-2 px-2 text-center border-r border-screenBorder-thread'>Số.</th>
              <th className='py-2 px-2 text-center border-r border-screenBorder-thread'>ID</th>
              <th className='py-2 px-2 text-start border-r border-screenBorder-thread'>Ngày</th>
              <th className='py-2 px-2 text-start border-r border-screenBorder-thread'>Tin nhắn</th>
            </tr>
          </thead>
          <tbody>
            {Array(19)
              .fill(0)
              .map((_, index) => (
                <tr
                  key={index}
                  className='odd:bg-background even:bg-secondary border-b border-borderColor-900 hover:bg-secondary cursor-pointer'
                >
                  <td className=' text-[13px] border-r border-borderColor-900 py-2 px-2 text-textOpacity-200'>
                    {index + 1}
                  </td>
                  <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2 font-medium'>1993715</td>
                  <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2 font-medium text-textOpacity-200 w-max'>
                    10/21/2024 6:23:09 PM
                  </td>
                  <td className=' text-[13px] border-r border-borderColor-900  py-2 px-2  '>
                    Attn:[Tennis] Due to player retirement, "Aliaksandra Sasnovich -vs- Leylah Fernandez (CAN)" [WTA -
                    Pan Pacific Open - 21/10], all bets taken are considered REFUNDED (Except Set 1 & 2 winner and those
                    products which have been determined the win loss). Parlay counted as one(1). Thank you!
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
const MessageIndividual = () => {
  return (
    <div>
      <div className='p-2 rounded-sm border text-[13px] bg-secondary border-screenBorder mt-1 space-y-1.5'>
        <div className='flex gap-3 items-center'>
          <DatePicker />
          <p className='text-textOpacity-200'>Đến</p>
          <DatePicker />
        </div>
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse   overflow-hidden'>
          <thead className=''>
            <tr className='bg-screenBg-thead text-textOpacity-thread'>
              <th className='py-2 px-2 text-center border-r border-screenBorder-thread'>Số.</th>
              <th className='py-2 px-2 text-center border-r border-screenBorder-thread'>ID</th>
              <th className='py-2 px-2 text-start border-r border-screenBorder-thread'>Ngày</th>
              <th className='py-2 px-2 text-start border-r border-screenBorder-thread'>Tin nhắn</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-background'>
              <td colSpan={20} className=' text-center   '>
                <div className='bg-screenBg-empty text-[13px] text-textOpacity-200 text-center py-3 '>
                  Không Có Thông Tin
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default MessageHistory
