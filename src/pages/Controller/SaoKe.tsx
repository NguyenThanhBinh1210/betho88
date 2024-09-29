/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Accordion,
  AccordionItem,
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
  Switch,
  Tab,
  Tabs
} from '@nextui-org/react'
import { useContext, useState } from 'react'
import testIcon from '~/assets/icons/l_133238.png'
import Empty from '~/components/Empty'
import { AppContext } from '~/contexts/app.context'
export const animals = [
  { key: 'cat', label: 'Cat' },
  { key: 'dog', label: 'Dog' },
  { key: 'elephant', label: 'Elephant' },
  { key: 'lion', label: 'Lion' },
  { key: 'tiger', label: 'Tiger' },
  { key: 'giraffe', label: 'Giraffe' },
  { key: 'dolphin', label: 'Dolphin' },
  { key: 'penguin', label: 'Penguin' },
  { key: 'zebra', label: 'Zebra' },
  { key: 'shark', label: 'Shark' },
  { key: 'whale', label: 'Whale' },
  { key: 'otter', label: 'Otter' },
  { key: 'crocodile', label: 'Crocodile' }
]

const SaoKe = () => {
  const { selectedTab, setSelectedTab } = useContext(AppContext)
  const [saokeTab, setSaokeTap] = useState<string>('binh-thuong')
  const [showChuoi, setShowChuoi] = useState<boolean>(false)
  const [selectTabEnd, setSelectedTabEnd] = useState('hom-nay')
  return (
    <div>
      <div className=' text-white bg-gradient-to-b from-[#0b3959] to-[#13191d]'>
        {/* <div className='py-2 px-4 md:py-4 font-medium'>Cược của tôi</div> */}
        <div>
          <div className='flex w-full flex-col py-2 px'>
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
              <Tab key='mo' title='Mở' />
              <Tab key='da-ket-thuc' title='Đã kết thúc' />
              <Tab key='ket-qua' title='Kết quả' />
            </Tabs>
            {selectedTab === 'mo' && (
              <>
                <div className='flex justify-between items-center'>
                  <p className='text-sm'>Mở 0 đơn cược</p>
                  <div className='flex justify-end py-2 gap-2 items-center'>
                    <p>Xem vé được bán</p>
                    <Switch size='sm' />
                  </div>
                </div>
                <div className='text-end bg-[#212a31] texr-sm rounded-md py-2 px-2 text-gray-400'>Tổng cược: 0</div>
              </>
            )}
            {selectedTab === 'da-ket-thuc' && (
              <>
                <div className='bg-[#212a31]'>
                  <Tabs
                    selectedKey={selectTabEnd}
                    onSelectionChange={(e: any) => setSelectedTabEnd(e)}
                    classNames={{
                      base: 'w-full',
                      tabList:
                        'gap-10 justify-between md:gap-20 w-full bg-transparent relative rounded-none p-0 border-b border-divider',
                      cursor: 'w-full bg-transparent border-b-2 border-[#19e5e6] rounded-none',
                      tab: ' px-0 h-max text-center pb-2 text-base',
                      tabContent: ' group-data-[selected=true]:text-[#19e5e6] text-white'
                    }}
                    aria-label='Options'
                  >
                    <Tab key='hom-nay' title='Hôm nay' />
                    <Tab key='2-ngay-qua' title='2 ngày qua' />
                    <Tab key='7-ngay-qua' title='7 ngày qua' />
                  </Tabs>
                </div>
                <div className='bg-[#212a31] px-3 py-2'>Số dư ban đầu: 0.00</div>

                {selectTabEnd === '7-ngay-qua' && (
                  <div className='text-white mt-3'>
                    <div className='grid grid-cols-2 gap-2 text-sm  '>
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
                  </div>
                )}
                <div className='bg-[#212a31] px-3 py-2 mt-4 flex justify-between'>
                  <span></span>
                  <span>Tổng cược: 0</span>
                  <span>Thắng/ Thua: 0.00</span>
                </div>
              </>
            )}
          </div>
        </div>
        {selectedTab === 'ket-qua' && (
          <>
            <div className='translate-x-[1vw] w-[98vw] flex justify-center mb-1'>
              <Select
                size='sm'
                classNames={{
                  value: 'text-white group-data-[has-value=true]:text-white text-center',
                  trigger: 'p-0 border-b-none',
                  label: 'none',
                  popoverContent: ' left-0',
                  innerWrapper:
                    'min-h-3 pt-0 group-data-[has-label=true]:pt-0 data-[open=true]:after:bg-blue-500 after:bg-blue-500'
                }}
                className='p-0 mx-auto w-full'
                variant='underlined'
                label=' '
                placeholder='Chọn '
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className='grid grid-cols-3'>
              <div
                onClick={() => setSaokeTap('binh-thuong')}
                className={` ${saokeTab === 'binh-thuong' ? 'bg-gradient-to-b from-[#075f5f] to-[#18e0e1]' : ''
                  } cursor-pointer  text-center transition-all duration-500 py-2 border-[#19e5e6] border rounded-l-md`}
              >
                Hôm qua
              </div>
              <div
                onClick={() => setSaokeTap('bao-cao')}
                className={` ${saokeTab === 'bao-cao' ? 'bg-gradient-to-b from-[#075f5f] to-[#18e0e1]' : ''
                  } cursor-pointer  text-center transition-all duration-500 py-2 border-[#19e5e6] border rounded-r-md`}
              >
                Hôm nay
              </div>
              <Select
                size='sm'
                classNames={{
                  value: 'text-white group-data-[has-value=true]:text-white text-center',
                  trigger: 'p-0 border-b-none',
                  label: 'none',
                  popoverContent: ' left-0',
                  innerWrapper:
                    'min-h-3 pt-0 group-data-[has-label=true]:pt-0 data-[open=true]:after:bg-blue-500 after:bg-blue-500'
                }}
                className='p-0'
                variant='underlined'
                label=' '
                placeholder='Ngày khác '
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
            </div>
            <div className='grid grid-cols-5 gap-5 mt-3 items-end'>
              <Select
                color='primary'

                classNames={{
                  value: 'text-white group-data-[has-value=true]:text-white text-center',
                  trigger: 'p-0 border-b-none',
                  label: 'none',
                  popoverContent: ' left-0',
                  innerWrapper:
                    ' pt-0 group-data-[has-label=true]:pt-0 data-[open=true]:after:bg-blue-500 after:bg-blue-500'
                }}
                size='sm' className=' col-span-2' variant='underlined' label=' ' placeholder='Bóng đá '>
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
              <Autocomplete
                color='primary'
                size='sm'
                variant='underlined'
                placeholder='Search an animal'
                className='col-span-3 '
              >
                {animals.map((animal) => (
                  <AutocompleteItem key={animal.key} value={animal.label}>
                    {animal.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
          </>
        )}
      </div>
      <div className='px-0 '>
        {selectedTab === 'mo' && <Empty></Empty>}
        {selectedTab === 'da-ket-thuc' && (
          // <div className='text-white'>
          //   <div className='grid grid-cols-2 gap-2 text-sm  '>
          //     <div
          //       onClick={() => setSaokeTap('binh-thuong')}
          //       className={` ${saokeTab === 'binh-thuong' ? 'bg-gradient-to-b from-[#075f5f] to-[#18e0e1]' : ''
          //         } cursor-pointer  text-center transition-all duration-500 py-2 border-[#19e5e6] border rounded-l-md`}
          //     >
          //       Bình thường
          //     </div>
          //     <div
          //       onClick={() => setSaokeTap('bao-cao')}
          //       className={` ${saokeTab === 'bao-cao' ? 'bg-gradient-to-b from-[#075f5f] to-[#18e0e1]' : ''
          //         } cursor-pointer  text-center transition-all duration-500 py-2 border-[#19e5e6] border rounded-r-md`}
          //     >
          //       Báo cáo Thắng/ Thua
          //     </div>
          //   </div>
          //   {saokeTab === 'binh-thuong' && <div className=' py-4 text-sm '>Không có thông tin</div>}
          //   {saokeTab === 'bao-cao' && (
          //     <>
          //       <div className=' pt-4 pb-2 text-sm '>Không có thông tin</div>
          //       <div className=' pt-0 text-sm '>
          //         <p>
          //           Lưu ý:
          //           <br />
          //           Để tiện cho việc tham khảo, giá trị Thắng Thua sẽ được làm tròn. Do đó, giá trị Tổng phụ (thắng
          //           thua) có thể sẽ khác với tổng của các giá trị Thắng Thua.
          //         </p>
          //       </div>
          //     </>
          //   )}
          // </div>
          <Empty></Empty>
        )}
        {selectedTab === 'ket-qua' && (
          <div className=' text-white mt-5'>
            <div className=''>
              <Accordion selectionMode='multiple' isCompact>
                <AccordionItem
                  startContent={<img width={18} src={testIcon} alt='testIcon' />}
                  className='bg-[#0b3959] p-2 rounded-md'
                  key='1'
                  aria-label='Accordion 1'
                  title={<div className='text-white'>Bồ Đào Nha LIGA 2</div>}
                >
                  <Accordion selectionMode='multiple' isCompact>
                    <AccordionItem
                      className='bg-[#0b3959]  rounded-md'
                      key='1'
                      aria-label='Accordion 1'
                      title={
                        <div className='text-white flex justify-between'>
                          <div className='text-xs'>
                            <p className='text-gray-300'>09/28/2024 05:00 PM</p>
                            <p className='text-[13px] font-medium'>Chaves</p>
                            <p className='text-[13px]'>SCU Torreense</p>
                          </div>
                          <div className='text-xs text-end'>
                            <p className='text-gray-300'>Kết thúc</p>
                            <p className='text-[13px] font-medium'>2</p>
                            <p className='text-[13px] font-medium'>1</p>
                          </div>
                        </div>
                      }
                    >
                      <table className='table text-xs w-full border border-blue-950'>
                        <thead className='font-medium bg-[#125586]'>
                          <tr>
                            <th className='py-1.5'>Tỷ Số Nửa Trận</th>
                            <th className='py-1.5'>Kết Quả Cuối Cùng</th>
                            <th className='py-1.5'>Trạng thái</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='text-center py-3 font-medium'>0-1</td>
                            <td className='text-center py-3 font-medium'>2-1</td>
                            <td className='text-center py-3 font-medium flex flex-col items-center gap-2'>
                              <div className='status'>Kết thúc</div>
                              <button
                                onClick={() => setShowChuoi(!showChuoi)}
                                className='btn btn-info'
                                aria-expanded='false'
                              >
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  strokeWidth={1.5}
                                  stroke='currentColor'
                                  className='size-5'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
                                  />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {showChuoi && (
                        <table className='mt-3 table text-xs w-full border border-blue-950'>
                          <thead className='font-medium bg-[#125586]'>
                            <tr>
                              <th className='py-1.5'>Chuỗi bàn thắng</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className='text-center py-3 font-medium'>A-H-H.</td>
                            </tr>
                          </tbody>
                        </table>
                      )}
                    </AccordionItem>
                  </Accordion>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SaoKe
