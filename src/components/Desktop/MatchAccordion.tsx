import { useState } from 'react'
import ComputerIcon from '../icons/ComputerIcon'
import DownIcon from '../icons/DownIcon'
import RightIcon from '../icons/RightIcon'
import StarSolidIcon from '../icons/StarSolidIcon'
import AccuracyRatio from './OddTypes/AccuracyRatio'
import FirstHalfAccuracyRatio from './OddTypes/FirstHalfAccuracyRatio'
import SecondHalfAccuracyRatio from './OddTypes/SecondHalfAccuracyRatio'
import AccuracyRatio1orFull from './OddTypes/AccuracyRatio1orFull'
interface AccordionItemProps {
  title: string
  keyName: string
  isOpen: boolean
  toggleItem: (key: string) => void
}

const MatchAccordion = ({ title, keyName, isOpen, toggleItem }: AccordionItemProps) => {
  return (
    <div className=''>
      <div className='flex cursor-pointer items-center text-xs text-textOpacity-800 bg-buttonTab border-b border-borderColor-undermath'>
        <button
          onClick={() => toggleItem(keyName)}
          className={`w-6 flex  justify-center  items-center transition-all ${isOpen ? '-rotate-180' : 'rotate-0'} `}
        >
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-4'>
            <path
              fillRule='evenodd'
              d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        <div className='flex items-center justify-between flex-1 border-l border-background '>
          <div className='flex items-center gap-1 px-1.5  h-full'>
            <p className='uppercase h-full'>{title}</p>
          </div>
          <div className='flex'>
            <div className='py-1 leading-5 cursor-pointer px-1 line-clamp-1 text-center min-w-[5vw] w-[108px] border-l border-background'>
              Cược Chấp Toàn Trận
            </div>
            <div className='py-1 leading-5 cursor-pointer px-1 line-clamp-1 text-center min-w-[5vw] w-[108px]'>
              Tài Xỉu Toàn Trận
            </div>
            <div className='py-1 leading-5 cursor-pointer px-1 line-clamp-1 text-center  w-[77px]'>1X2 Toàn Trận</div>
            <div className='py-1 leading-5 cursor-pointer px-1 line-clamp-1 text-center min-w-[5vw] w-[108px] border-l border-background'>
              Cược Chấp Hiệp 1
            </div>
            <div className='py-1 leading-5 cursor-pointer px-1 line-clamp-1 text-center min-w-[5vw] w-[108px]'>
              Tài Xỉu Hiệp 1
            </div>
            <div className='py-1 leading-5 cursor-pointer px-1 line-clamp-1 text-center  w-[77px]'>1X2 Hiệp 1</div>
          </div>
        </div>
      </div>
      <div className={` bg-secondary ${isOpen ? 'max-h-[8000px]' : 'max-h-0 overflow-hidden'}`}>
        <MatchItem />
        <MatchItem />
      </div>
    </div>
  )
}

const MatchItem = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<boolean>(false)
  const [showOdds, setShowOdds] = useState<boolean>(false)
  const [activeTab, setActiveTab] = useState<string>('Phổ biến')
  const handleCheckboxChange = () => {
    setChecked(!checked)
  }
  const handleShowMoreChange = () => {
    setShowMore(!showMore)
  }
  const handleShowOddsChange = () => {
    setShowOdds(!showOdds)
  }
  return (
    <div>
      <div className='flex border-t border-borderColor-900'>
        <div className='w-[86px]  text-[13px] text-textOpacity-800 p-1.5 text-center flex flex-col items-center gap-1'>
          <p className='text-textActive'>0-0</p>
          <p className='leading-4'>
            1H
            <br />
            25'
          </p>
          <button className='text-textOpacity-900 hover:text-yellow-500'>
            <StarSolidIcon className='size-5 ' />
          </button>
        </div>
        <div className='flex-1'>
          <div className='flex'>
            <div className='flex-1 border-l border-b text-textOpacity-800 border-borderColor-900 space-y-2 font-semibold p-2'>
              <p className='text-textActive'>Gainare Tottori</p>
              <p>Kamatamare Sanuki</p>
              <p className='font-normal'>Hoà</p>
            </div>
            <div className='border-l border-borderColor-900'>
              <div className='flex border-b border-borderColor-900 '>
                <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw] '>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>0/0.5</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'></span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                </div>
                <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw]'>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>0/0.5</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>u</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                </div>
                <div className='py-1 cursor-pointer space-y-1.5 px-1 text-center  w-[5vw]'>
                  <div className='border-selectHover  bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5  font-semibold'>
                    <span className='text-white '>0.90</span>
                  </div>
                  <div className='border-selectHover  bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5  font-semibold'>
                    <span className='text-white '>0.90</span>
                  </div>
                  <div className='border-selectHover  bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5  font-semibold'>
                    <span className='text-white '>0.90</span>
                  </div>
                </div>
                <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw] border-l border-borderColor-900'>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>0/0.5</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'></span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                </div>
                <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw]'>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>0/0.5</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>u</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                </div>
                <div className='py-1 cursor-pointer space-y-1.5 px-1 text-center  w-[5vw]'>
                  <div className='border-selectHover  bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5  font-semibold'>
                    <span className='text-white '>0.90</span>
                  </div>
                  <div className='border-selectHover  bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5  font-semibold'>
                    <span className='text-white '>0.90</span>
                  </div>
                  <div className='border-selectHover  bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5  font-semibold'>
                    <span className='text-white '>0.90</span>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-borderColor-900 '>
                <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw] '>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>0/0.5</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'></span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                </div>
                <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw]'>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>0/0.5</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>u</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                </div>
                <div className='py-1 cursor-pointer space-y-1.5 px-1 text-center  w-[5vw]'></div>
                <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw] border-l border-borderColor-900'>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>0/0.5</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'></span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                </div>
                <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw]'>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>0/0.5</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                  <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                    <span className='text-textOpacity-200'>u</span>
                    <span className='text-textDanger'>-0.90</span>
                  </div>
                </div>
                <div className='py-1 cursor-pointer space-y-1.5 px-1 text-center  w-[5vw]'></div>
              </div>
              <div
                className={`${
                  showMore ? 'max-h-screen' : 'max-h-0'
                } overflow-hidden duration-500 ease-in-out transition-max-height`}
              >
                <div className='flex border-b border-borderColor-900 '>
                  <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw] '>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>0/0.5</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'></span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                  </div>
                  <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw]'>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>0/0.5</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>u</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                  </div>
                  <div className='py-1 cursor-pointer space-y-1.5 px-1 text-center  w-[5vw]'></div>
                  <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw] border-l border-borderColor-900'>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>0/0.5</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'></span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                  </div>
                  <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw]'>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>0/0.5</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>u</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                  </div>
                  <div className='py-1 cursor-pointer space-y-1.5 px-1 text-center  w-[5vw]'></div>
                </div>
                <div className='flex border-b border-borderColor-900 '>
                  <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw] '>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>0/0.5</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'></span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                  </div>
                  <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw]'>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>0/0.5</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>u</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                  </div>
                  <div className='py-1 cursor-pointer space-y-1.5 px-1 text-center  w-[5vw]'></div>
                  <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw] border-l border-borderColor-900'>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>0/0.5</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'></span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                  </div>
                  <div className='py-1  cursor-pointer space-y-1.5 px-1 text-center  w-[7vw]'>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>0/0.5</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                    <div className='border-selectHover bg-gradient-to-b hover:bg-gradient-to-br transition-background hover:from-primary/80 hover:to-secondary from-secondary to-primary/80 border rounded py-0.5 px-1.5 flex justify-between items-center font-semibold'>
                      <span className='text-textOpacity-200'>u</span>
                      <span className='text-textDanger'>-0.90</span>
                    </div>
                  </div>
                  <div className='py-1 cursor-pointer space-y-1.5 px-1 text-center  w-[5vw]'></div>
                </div>
              </div>
            </div>
          </div>
          <div className='relative flex border-l border-borderColor-900 p-1.5 justify-between'>
            <div className=''></div>
            <div
              onClick={handleShowMoreChange}
              className='absolute border border-borderColor-900 border-t-0 px-2 py-1 cursor-pointer text-xs  top-0 left-1/2 -translate-x-1/2 flex items-center gap-1.5'
            >
              <p>Các loại cược Châu Á khác</p>
              <button className={`${showMore ? '-rotate-180' : 'rotate-0'} transition-all`}>
                <DownIcon />
              </button>
            </div>
            <div className='flex items-center gap-2'>
              <button
                onClick={handleCheckboxChange}
                className='bg-buttonCollapse group hover:bg-buttonCollapse-hover h-[25px] px-1.5 transition-all rounded flex items-center leading-3 gap-x-1.5'
              >
                <ComputerIcon />
                <label className='cursor-pointer'>Thêm vào xem đa màn hình</label>
                <div className='flex items-center'>
                  <div className='relative'>
                    <input
                      type='checkbox'
                      id='checkbox'
                      checked={checked}
                      onChange={handleCheckboxChange}
                      className='appearance-none h-4 w-4 border-2 group-hover:checked:bg-white transition-all group-hover:border-white bg-transparent rounded-sm cursor-pointer checked:bg-textActive checked:border-textActive focus:ring-0'
                    />
                    {checked && (
                      <svg
                        onClick={handleCheckboxChange}
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className={`absolute top-0 left-0 w-4 h-4 text-buttonCollapse `}
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
                      </svg>
                    )}
                  </div>
                </div>
              </button>
              <button
                onClick={handleShowOddsChange}
                className='bg-buttonCollapse hover:bg-buttonCollapse-hover h-[25px] px-1.5 transition-all rounded flex items-center leading-3 gap-x-1.5'
              >
                <span>50</span>
                <DownIcon />
              </button>
              <button className='bg-buttonCollapse hover:bg-buttonCollapse-hover h-[25px] px-1.5 transition-all rounded'>
                <RightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showOdds && (
        <div className='p-2 bg-secondary border-t border-borderColor-900'>
          <div className='space-y-[7px]'>
            <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='py-2 border-t border-selectHover space-y-2 text-'>
              <AccuracyRatio />
              <FirstHalfAccuracyRatio />
              <SecondHalfAccuracyRatio />
              <AccuracyRatio1orFull />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface TabListProps {
  activeTab: string
  setActiveTab: (value: string) => void
}
const TabList = ({ activeTab, setActiveTab }: TabListProps) => {
  return (
    <div className='space-x-2'>
      <button
        onClick={() => setActiveTab('Phổ biến')}
        className={`  px-3 py-1.5 transition-background ${
          activeTab === 'Phổ biến'
            ? 'text-textActive border-selectHover border-b-0 rounded-t border'
            : 'text-textOpacity-800 bg-buttonTab hover:bg-buttonTab-hover rounded'
        }  text-xs   relative`}
      >
        Phổ biến
        {activeTab === 'Phổ biến' && (
          <div
            style={{ boxSizing: 'content-box' }}
            className='absolute h-2 bg-secondary -bottom-2 border-x border-selectHover w-full left-0 -translate-x-[1px]'
          ></div>
        )}
      </button>
      <button
        onClick={() => setActiveTab('Toàn trận')}
        className={`  px-3 py-1.5 transition-background ${
          activeTab === 'Toàn trận'
            ? 'text-textActive border-selectHover border-b-0 rounded-t border'
            : 'text-textOpacity-800 bg-buttonTab hover:bg-buttonTab-hover rounded'
        }  text-xs   relative`}
      >
        Toàn trận
        {activeTab === 'Toàn trận' && (
          <div
            style={{ boxSizing: 'content-box' }}
            className='absolute h-2 bg-secondary -bottom-2 border-x border-selectHover w-full left-0 -translate-x-[1px]'
          ></div>
        )}
      </button>
      <button
        onClick={() => setActiveTab('Phạt góc/Thẻ phạt')}
        className={`  px-3 py-1.5 transition-background ${
          activeTab === 'Phạt góc/Thẻ phạt'
            ? 'text-textActive border-selectHover border-b-0 rounded-t border'
            : 'text-textOpacity-800 bg-buttonTab hover:bg-buttonTab-hover rounded'
        }  text-xs   relative`}
      >
        Phạt góc/Thẻ phạt
        {activeTab === 'Phạt góc/Thẻ phạt' && (
          <div
            style={{ boxSizing: 'content-box' }}
            className='absolute h-2 bg-secondary -bottom-2 border-x border-selectHover w-full left-0 -translate-x-[1px]'
          ></div>
        )}
      </button>
    </div>
  )
}
export default MatchAccordion
