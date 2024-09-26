import { Tab, Tabs } from '@nextui-org/react'
import { sportTab } from '~/constants/renaral.const'

const SportTab = () => {
  return (
    <div className='flex flex-col py-2 w-full'>
      <Tabs
        isVertical
        className=''
        classNames={{
          tabList: 'gap-2 bg-transparent relative rounded-none p-0 border-b border-divider',
          panel: 'w-full',
          cursor: 'w-full bg-transparent',
          tab: ' p-0 h-max border border-[#075288] text-sm overflow-hidden',
          tabContent:
            ' group-data-[selected=true]:bg-gradient-to-b group-data-[selected=true]:from-[#075f5f] group-data-[selected=true]:to-[#18e0e1] w-full !p-0'
        }}
        aria-label='Options-sport'
      >
        {sportTab.map((item) => (
          <Tab
            title={
              <div className='flex items-center  w-full flex-col p-1 py-3 rounded overflow-hidden'>
                <span className=' text-xs text-white rounded'>{item.title}</span>
                <p className='text-xl font-medium text-white'>{item.description}</p>
              </div>
            }
            key={item.key}
          >
            <div className='space-y-2'>{item?.content}</div>
          </Tab>
        ))}
      </Tabs>
    </div>
  )
}

export default SportTab
