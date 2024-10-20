import { useState } from 'react'

const BaseTab = ({
  values,
  className,
  wrapClassName
}: {
  values: string[]
  className?: string
  wrapClassName?: string
}) => {
  const [tabIndex, setTab] = useState<number>(0)

  const TabGroup = (
    <div className={`flex rounded border border-screenBorder overflow-hidden ${wrapClassName}`}>
      {values.map((item, index) => (
        <button
          key={index}
          onClick={() => setTab(index)}
          className={`text-center w-full cursor-pointer transition-all  py-2 font-medium  ${tabIndex === index ? 'bg-screenTab-hover' : 'hover:bg-screenTab-active bg-screenTab-nonactive'
            } ${className}`}
        >
          {item}
        </button>
      ))}
    </div>
  )
  return { tabIndex, TabGroup }
}

export default BaseTab
