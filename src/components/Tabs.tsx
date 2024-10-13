import React, { useState } from 'react'

interface Tab {
  label: string
  count?: number // Dùng cho những tab có số đếm, như "Trực tiếp"
}

interface TabsProps {
  tabs: Tab[]
  defaultActiveIndex?: number
  onTabChange?: (index: number) => void
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveIndex = 0, onTabChange }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex)

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
    onTabChange && onTabChange(index)
  }

  return (
    <div className='grid grid-cols-3 py-1  text-textOpacity-100'>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`flex items-center justify-center cursor-pointer relative ${
            activeIndex === index ? 'text-textActive' : 'hover:text-textOpacity-800'
          }`}
          onClick={() => handleTabClick(index)}
        >
          <p className='ml-1'>{tab.label}</p>
          {activeIndex === index && (
            <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-[90%] h-[1.5px] bg-textActive'></div>
          )}
          {tab.count !== undefined && (
            <div className='absolute -top-0.5 -right-0.5 text-background bg-textActive text-[10px] px-0.5 rounded-sm leading-3'>
              {tab.count}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Tabs
