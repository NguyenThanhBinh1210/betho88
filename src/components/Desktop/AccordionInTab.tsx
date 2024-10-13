import React, { useState } from 'react'
import QuestionIcon from '../icons/QuestionIcon'
import { motion } from 'framer-motion'
import DownIcon from '../icons/DownIcon'
interface AccordionInTabProps {
  title: string
  children: React.ReactNode
}
const AccordionInTab = ({ title, children }: AccordionInTabProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='p-1.5 bg-thirty border rounded border-borderColor'>
      <div className='flex items-center justify-between  pb-1'>
        <div className='flex items-center gap-2'>
          <button onClick={toggleAccordion}>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <DownIcon />
            </motion.div>
          </button>
          <span className='text-textActive'>{title}</span>
        </div>
        <QuestionIcon />
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className=' border-t border-borderColor'
      >
        {children}
      </motion.div>
    </div>
  )
}

export default AccordionInTab
