/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tab, Tabs } from '@nextui-org/react'
import { useState } from 'react'
import defaultImage from '~/assets/images/l_5881.png'
const dataSport = [
  {
    key: 'bong-da',
    title: 'Bóng đá'
  },
  {
    key: 'bong-ro',
    title: 'Bóng rổ'
  },
  {
    key: 'the-thao-dien-tu',
    title: 'Thể thao điện tử'
  },
  {
    key: 'quan-vot',
    title: 'Quần vợt'
  },
  {
    key: 'cau-long',
    title: 'Cầu lông'
  },
  {
    key: 'cricket',
    title: 'Cricket'
  },
  {
    key: 'bong-chay',
    title: 'Bóng chày'
  },
  {
    key: 'bong-bau-duc-my',
    title: 'Bóng bầu dục Mỹ'
  },
  {
    key: 'khuc-con-cau-tren-bang',
    title: 'Khúc côn cầu trên băng'
  },
  {
    key: 'bong-bau-duc',
    title: 'Bóng bầu dục'
  },
  {
    key: 'quyen-anh',
    title: 'Quyền anh'
  }
]
interface AccordionItem {
  key: string
  title: string
  isLive: boolean
}
const items: AccordionItem[] = [
  { key: 'vong-loai', isLive: true, title: 'Vòng loại' },
  { key: 'bong-da', isLive: false, title: 'Bóng đá' },
  { key: 'bong-ro', isLive: false, title: 'Bóng rổ' },
  { key: 'the-thao-dien-tu', isLive: false, title: 'Thể thao điện tử' }
]

const Sport = () => {
  const [selectedTab, setSelectedTab] = useState<string>('bong-da')
  const [expandedTab, setExpandedTab] = useState<boolean>(false)
  const [openItems, setOpenItems] = useState<string[]>([])
  const toggleExpandAll = () => {
    if (openItems.length === items.length) {
      setOpenItems([])
    } else {
      setOpenItems(items.map((item) => item.key))
    }
  }
  return (
    <div>
      <div className=' px-2 relative bg-[#212a31] mb-1'>
        <div className='w-full overflow-x-auto'>
          <Tabs
            selectedKey={selectedTab}
            onSelectionChange={(e: any) => setSelectedTab(e)}
            classNames={{
              tabList: 'gap-3 justify-between  w-full bg-transparent relative rounded-none p-0 border-b border-divider',
              cursor: 'w-full bg-transparent border-b-2 border-[#19e5e6] rounded-none',
              tab: ' px-0 h-max text-center pb-1 text-sm',
              tabContent: ' group-data-[selected=true]:text-[#19e5e6] text-gray-400'
            }}
            aria-label='Options'
          >
            {dataSport.map((item) => (
              <Tab key={item.key} title={item.title} />
            ))}
          </Tabs>
        </div>
        <button
          onClick={() => setExpandedTab(!expandedTab)}
          className='text-white absolute right-2 top-1/2 -translate-y-1/2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </button>
        <div
          className={`${expandedTab ? 'opacity-100 visible top-1' : 'opacity-0 invisible -top-full'
            } border-borderColor1 transition-all font-medium text-sm text-textColor1 border rounded absolute w-[calc(100%-10px)]  p-2 left-1/2 -translate-x-1/2 bg-[#212a31]`}
        >
          <div className='flex justify-between px-2 items-center'>
            <p>Mọi môn thể thao</p>
            <button onClick={() => setExpandedTab(!expandedTab)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
          <div className='grid grid-cols-3 gap-2 mt-2 font-n'>
            {dataSport.map((item) => (
              <div
                onClick={() => setSelectedTab(item.key)}
                key={item.key}
                className={` ${selectedTab === item.key ? 'border-borderActive text-textActive' : 'border-borderColor1'
                  }  border p-2 rounded cursor-pointer`}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='px-1 text-white'>
        <div
          onClick={toggleExpandAll}
          className='rounded-t text-xs px-2 cursor-pointer py-1.5 flex justify-between '
          style={{ backgroundImage: 'linear-gradient(to bottom, #0a3a5c 0%, #101518 100%)' }}
        >
          Mở rộng tất cả giải đấu
          <button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
            </svg>
          </button>
        </div>
      </div>
      <div className='px-1 space-y-1'>
        {items.map((item) => (
          <Accordion key={item.key} item={item} />
        ))}
      </div>
    </div>
  )
}

interface AccordionProps {
  item: AccordionItem
}
const Accordion = ({ item }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([])
  const toggleAccordion = (itemKey: string) => {
    if (openItems.includes(itemKey)) {
      setOpenItems(openItems.filter((key) => key !== itemKey))
    } else {
      setOpenItems([...openItems, itemKey])
    }
  }
  return (
    <div key={item.key} className=' text-xs '>
      <button
        className={`${item.isLive && 'border-b-red-600 border-b'
          } w-full text-left py-2 px-2   text-white  rounded focus:outline-none transition-all ${openItems.includes(item.key) ? 'bg-transparent' : 'bg-[#182025]'
          }`}
        onClick={() => toggleAccordion(item.key)}
      >
        <div className='flex justify-between items-center'>
          <span className='uppercase flex items-center gap-x-1.5'>
            <img src={defaultImage} className='size-[18px]' loading='lazy' alt='img' /> *{item.title}
          </span>
          <div className='flex items-center gap-2 text-textColor1'>
            {openItems.includes(item.key) ? (
              <button>
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
                    d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
                  />
                </svg>
              </button>
            ) : (
              <div className='bg-[#212a31] text-white rounded px-1 '>20</div>
            )}
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
                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
              />
            </svg>
          </div>
        </div>
      </button>
      <div
        className={`  rounded-b  overflow-hidden transition-all duration-300 ${openItems.includes(item.key) ? 'max-h-[2000px]' : 'max-h-0'
          }`}
      >
        <div className={`text-white space-y-1`}>
          <AccordionChild />
          <AccordionChild />
        </div>
      </div>
    </div>
  )
}

const AccordionChild = () => {
  const [expanded, setExpanded] = useState<boolean>(false)
  return (
    <div
      onClick={() => setExpanded(true)}
      className={`border-t ${expanded ? 'h-[190px] items-start' : 'h-[45px] items-center'
        }  px-2 py-1 border-[#ffffff29] overflow-hidden transition-all rounded bg-[#212a31] flex  justify-between`}
    >
      <div className='w-[37%] pr-3'>
        <div className={`flex  gap-2 text-[13px]  ${expanded ? 'items-start mt-1' : 'items-center'}`}>
          <span>10/19 18:30</span>
          <div
            className={`space-y-1 pt-1 transition-all ${expanded ? 'opacity-0 invisible -translate-y-full' : 'opacity-100 visible'
              }`}
          >
            <p>Tottenham Hotspur</p>
            <p>West Ham United</p>
          </div>
        </div>
        <div className={`transition-all text-sm ${expanded ? 'max-h-40' : 'max-h-0'}`}>
          <p className='text-textActive mb-4 mt-2'>Tottenham Hotspur</p>
          <p className='ve mb-4'>West Ham United</p>
          <div className='flex items-center justify-between'>
            <button>
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
                  d='M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z'
                />
              </svg>
            </button>
            <div className='flex gap-x-1 text-textColor1'>
              <button>
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
                    d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
                  />
                </svg>
              </button>
              <button>
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
                    d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${expanded ? 'translate-y-0' : 'translate-y-36'
          } transition-all flex w-full flex-1 overflow-x-auto text-white px-1 `}
      >
        <div className='min-w-[200%] w-max grid grid-cols-6 gap-1.5 gap-x-2'>
          <div className='text-center text-textActive pt-1 pb-2'>Toàn Trận - Cược Chấp</div>
          <div className='text-center text-textActive pt-1 pb-2'>Toàn Trận - Tài/Xỉu</div>
          <div className='text-center text-textActive pt-1 pb-2'>Toàn Trận - 1x2</div>
          <div className='text-center text-textActive pt-1 pb-2'>Hiệp 1 - Cược Chấp</div>
          <div className='text-center text-textActive pt-1 pb-2'>Hiệp 1 - Tài/Xỉu</div>
          <div className='text-center text-textActive pt-1 pb-2'>Hiệp 1 - 1x2</div>
          <>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>-1.25</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>o 1.25</p>
              <p className='font-semibold text-[17px] text-white '>0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>Đội nhà</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>-1.25</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>o 1.25</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>Đội nhà</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
          </>
          <>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>+1.25</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>u 1.25</p>
              <p className='font-semibold text-[17px] text-white '>0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>Đội khách</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>+1.25</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>u 1.25</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>Đội khách</p>
              <p className='font-semibold text-[17px] text-red-600 '>-0.98</p>
            </div>
          </>
          <>
            <div
              className='rounded py-0.5 text-center col-span-2 flex items-center justify-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-white'>Cược Châu Á khác</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>Hoà</p>
              <p className='font-semibold text-[17px] text-white '>0.98</p>
            </div>
            <div
              className='rounded py-0.5 text-center col-span-2 flex items-center justify-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-white'>Cược Châu Á khác</p>
            </div>
            <div
              className='rounded py-0.5 text-center'
              style={{ backgroundImage: 'linear-gradient(to bottom, #182025 0%, transparent 100%)' }}
            >
              <p className='text-[13px] text-textColor1'>Hoà</p>
              <p className='font-semibold text-[17px] text-white '>0.98</p>
            </div>
          </>
        </div>
      </div>
      <div className='w-[3%] flex flex-col items-end'>
        <button
          onClick={(e) => {
            e.stopPropagation()
            setExpanded(!expanded)
          }}
          className={`text-textColor1 mx-auto transition-all ${expanded ? 'rotate-180' : 'rotate-0 '}`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </svg>
        </button>
        <div className={`mt-12  justify-center w-full ${expanded ? 'flex' : 'hidden'} `}>
          <div className='bg-[#0a3a5c] cursor-pointer size-[30px] rounded-md flex items-center justify-center'>82+</div>
        </div>
      </div>
    </div>
  )
}

export default Sport
