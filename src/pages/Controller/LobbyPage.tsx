import { Tab, Tabs } from '@nextui-org/react'
import { useState } from 'react'
import { tabList } from '~/constants/renaral.const'
import Header from '~/layouts/manager/Header'

const LobbyPage = () => {
  const [activeTab, setActiveTab] = useState<string>('the-thao')

  return (
    <div className='flex flex-col'>
      <Header />

      <div className='flex w-full flex-col py-2 px-4 '>
        <Tabs
          classNames={{
            tabList: 'gap-5  md:gap-20 w-full bg-transparent relative rounded-none p-0 border-b border-divider',
            cursor: 'w-full bg-transparent',
            tab: 'max-w-fit px-0 h-max',
            tabContent: ' group-data-[selected=true]:text-[#19e5e6] text-[#006bb8]'
          }}
          aria-label='Options'
        >
          {tabList.map((item) => (
            <Tab
              title={
                <div
                  onClick={() => setActiveTab(item.key)}
                  className='flex items-center flex-col space-x-2  font-medium'
                >
                  <div className='relative'>
                    <div className='w-[56px] h-[56px] overflow-hidden rounded-full '>
                      <img
                        style={{ filter: activeTab !== item.key ? 'grayscale(90%)' : '' }}
                        src={item.img}
                        alt='sportIcon'
                      />
                    </div>
                    <span className='px-1 absolute -bottom-0 left-1/2 -translate-x-1/2 bg-yellow-500 rounded text-[#734831] text-[10px] leading-3'>
                      Mới
                    </span>
                  </div>
                  <span className='text-xs'>{item.title}</span>
                </div>
              }
              key={item.key}
              className=''
            >
              {item?.content}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default LobbyPage
