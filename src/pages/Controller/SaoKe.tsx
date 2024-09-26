/* eslint-disable @typescript-eslint/no-explicit-any */
import { Switch, Tab, Tabs } from '@nextui-org/react'
import { useState } from 'react'

const SaoKe = () => {
  const [selectedTab, setSelectedTab] = useState<string>('dang-dien-ra')
  const [saokeTab, setSaokeTap] = useState<string>('binh-thuong')
  return (
    <div>
      <div className=' text-white bg-gradient-to-b from-[#0b3959] to-[#13191d]'>
        <div className='p-4 font-medium'>Cược của tôi</div>
        <div>
          <div className='flex w-full flex-col py-2 px-4 '>
            <Tabs
              selectedKey={selectedTab}
              onSelectionChange={(e: any) => setSelectedTab(e)}
              classNames={{
                tabList:
                  'gap-10 justify-between md:gap-20 w-full bg-transparent relative rounded-none p-0 border-b border-divider',
                cursor: 'w-full bg-transparent border-b-2 border-[#19e5e6] rounded-none',
                tab: ' px-0 h-max text-center pb-2 text-base',
                tabContent: ' group-data-[selected=true]:text-[#19e5e6] text-gray-500'
              }}
              aria-label='Options'
            >
              <Tab key='dang-dien-ra' title='Đang diễn ra' />
              <Tab key='sao-ke' title='Sao kê' />
              <Tab key='ket-qua' title='Kết quả' />
            </Tabs>
            <div className='flex justify-end py-2 gap-2 items-center'>
              <p>Xem vé được bán</p>
              <Switch size='sm' />
            </div>
          </div>
        </div>
        <div className='px-3'>
          {selectedTab === 'dang-dien-ra' && <div className=' pb-4 text-sm '>Không có thông tin</div>}
          {selectedTab === 'sao-ke' && (
            <div className='text-white'>
              <div className='grid grid-cols-2 gap-2 text-sm '>
                <div
                  onClick={() => setSaokeTap('binh-thuong')}
                  className={` ${saokeTab === 'binh-thuong' ? 'bg-gradient-to-b from-[#075f5f] to-[#18e0e1]' : ''
                    } cursor-pointer  text-center transition-all duration-500 py-2 border-[#19e5e6] border rounded-l-md`}
                >
                  Bình thường
                </div>
                <div
                  onClick={() => setSaokeTap('bao-cao')}
                  className={` ${saokeTab === 'bao-cao' ? 'bg-gradient-to-b from-[#075f5f] to-[#18e0e1]' : ''
                    } cursor-pointer  text-center transition-all duration-500 py-2 border-[#19e5e6] border rounded-r-md`}
                >
                  Báo cáo Thắng/ Thua
                </div>
              </div>
              {saokeTab === 'binh-thuong' && <div className=' py-4 text-sm '>Không có thông tin</div>}
              {saokeTab === 'bao-cao' && (
                <>
                  <div className=' pt-4 pb-2 text-sm '>Không có thông tin</div>
                  <div className=' pt-0 text-sm '>
                    <p>
                      Lưu ý:
                      <br />
                      Để tiện cho việc tham khảo, giá trị Thắng Thua sẽ được làm tròn. Do đó, giá trị Tổng phụ (thắng
                      thua) có thể sẽ khác với tổng của các giá trị Thắng Thua.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SaoKe
