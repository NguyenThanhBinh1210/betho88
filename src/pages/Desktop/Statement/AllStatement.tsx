import { useState } from 'react'
import PathRoudedIcon from '~/components/icons/PathRoudedIcon'
import { motion } from 'framer-motion'

const AllStatement = () => {
  const [tab, setTab] = useState<number>(0)
  return (
    <div>
      <div className='flex justify-between text-[13px]'>
        <h2 className='font-medium text-textOpacity-200 text-base'>Bảng Cược</h2>
        <div className='flex items-center gap-1.5'>
          <div className='flex rounded border border-screenBorder overflow-hidden'>
            <button
              onClick={() => setTab(0)}
              className={`text-textOpacity-200 px-3 py-0.5  transition-all  ${tab === 0 ? 'bg-screenButton-active' : 'hover:bg-screenButton-hover'
                }`}
            >
              Bình thường
            </button>
            <button
              onClick={() => setTab(1)}
              className={`text-textOpacity-200 px-3 py-0.5  transition-all  ${tab === 1 ? 'bg-screenButton-active' : 'hover:bg-screenButton-hover'
                }`}
            >
              Báo cáo Thắng/Thua
            </button>
          </div>
          <button className='text-textOpacity-200 bg-background flex items-center justify-center w-6 h-6 rounded-sm border-[0.5px] border-screenBorder hover:bg-screenTab'>
            <PathRoudedIcon />
          </button>
        </div>
      </div>
      {tab === 0 ? <Tab1 /> : <Tab2 />}
    </div>
  )
}

const Tab1 = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className='w-full overflow-auto text-xs '
      >
        <table className='table-auto w-full border-collapse mt-2 rounded-t rounded-sm overflow-hidden'>
          <thead className=''>
            <tr className='bg-screenBg-thead text-white'>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Ngày</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Ghi Chú</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Lượng Tiền</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Tín Dụng/Ghi Nợ</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Hoa Hồng</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Số dư </th>
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className='text-textOpacity-200 text-[13px] mt-2'
      >
        Lưu ý:
        <br />
        - Các cược đang chờ có thể cần thời gian để xử lý. Vui lòng xem thông tin trong Bảng Cược.
        <br />- Xin lưu ý rằng thời gian hiển thị dựa trên GMT -4.
      </motion.div>
    </div>
  )
}
const Tab2 = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, translateY: 10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className='w-full overflow-auto text-xs '
      >
        <table className='table-auto w-full border-collapse mt-4 rounded-t rounded-sm overflow-hidden'>
          <thead className=''>
            <tr className='bg-screenBg-thead text-white'>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Ngày</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Tổng số Vé cược</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Lượng tiền</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Hoa Hồng</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Tín Dụng/Ghi Nợ</th>
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className='w-full overflow-auto text-xs '
      >
        <table className='table-auto w-full border-collapse mt-2 rounded-t rounded-sm overflow-hidden'>
          <thead className=''>
            <tr className='bg-screenBg-thead text-white'>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Ngày</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Tổng số Vé cược</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Lượng tiền</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Hoa Hồng</th>
              <th className='py-2 text-center border-r border-screenBorder-thread'>Tín Dụng/Ghi Nợ</th>
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
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.3 }}
        className='text-textOpacity-200 text-[13px] mt-2'
      >
        Lưu ý:
        <br />
        - Để tiện cho việc tham khảo, giá trị Thắng Thua sẽ được làm tròn. Do đó, giá trị Tổng phụ (thắng thua) có thể
        sẽ khác với tổng của các giá trị Thắng Thua.
        <br />- Xin lưu ý rằng thời gian hiển thị dựa trên GMT -4.
      </motion.div>
    </div>
  )
}

export default AllStatement
