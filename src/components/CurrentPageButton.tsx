import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { casinoLiveList, kenoList, sabaList, xosoSportList } from '~/constants/renaral.const'
import useSearchParam from '~/hooks/useSearchParams'

const CurrentPageButton = () => {
  const [showHanMuc, setShowHanMuc] = useState<boolean>(false)
  const [showCasinoLive, setShowCasinoLive] = useState<boolean>(false)
  const [showSABA, setShowSABA] = useState<boolean>(false)
  const [showKeno, setShowKeno] = useState<boolean>(false)
  const [showSportXS, setShowSportXS] = useState<boolean>(false)
  const location = useLocation().pathname
  const { getParam, setParam, removeParam } = useSearchParam()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowHanMuc(false)
      }
    }
    const handleScroll = () => {
      setShowHanMuc(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref])
  const handleCloseAll = () => {
    setShowKeno(false)
    setShowSABA(false)
    setShowSportXS(false)
    setShowCasinoLive(false)
  }

  return (
    <>
      <div className='flex items-center gap-x-1'>
        <button
          onClick={() => {
            setShowHanMuc(!showHanMuc)
            handleCloseAll()
          }}
          // isIconOnly
          className='text-white px-2'
        >
          <div className='text-sm text-start'>
            <p className='text-base md:pl-2 flex items-center gap-1'>
              <p className='hidden md:block'>Yêu thích</p>
              <span className={`${showHanMuc && 'rotate-180'} transition-all`}>
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
              </span>
            </p>
          </div>
        </button>
        <div
          onClick={() => {
            if (getParam('s') !== '4') {
              setParam('s', '4')
            } else {
              removeParam('s')
            }
          }}
          className={`bg-[#0c1f31] cursor-pointer transition-all text-xs px-2 rounded-xl py-0.5 pb-1 ${
            getParam('s') === '4' ? 'bg-[#19e5e6] text-black shadow-sm shadow-[#19e5e65c]' : 'text-white'
          }`}
        >
          Cược xiên
        </div>
      </div>
      <div
        ref={ref}
        className={`fixed text-white grid grid-cols-3 gap-2 p-3 z-20 bg-[#182025] top-10 left-0 w-full transition-all  ${
          showHanMuc ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          onClick={() => {
            handleCloseAll()
            setParam('s', '1')
          }}
          className={`${
            getParam('s') === '1' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer `}
        >
          Phổ biến
        </div>
        <div
          onClick={() => {
            handleCloseAll()
            setParam('s', '2')
          }}
          className={`${
            getParam('s') === '2' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer `}
        >
          Yêu thích
        </div>
        <div
          onClick={() => {
            handleCloseAll()
            setParam('s', '3')
          }}
          className={`${
            getParam('s') === '3' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer `}
        >
          Thể thao
        </div>
        <div
          onClick={() => {
            handleCloseAll()
            setParam('s', '4')
          }}
          className={`${
            getParam('s') === '4' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer `}
        >
          Cược xiên
        </div>
        <div
          onClick={handleCloseAll}
          className={`${
            location === '/' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer `}
        >
          Saba PinGoal
        </div>
        <div
          onClick={handleCloseAll}
          className={`${
            location === '/' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer `}
        >
          Thể thao ảo
        </div>
        <div
          onClick={handleCloseAll}
          className={`${
            location === '/' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer `}
        >
          Number Game
        </div>
        <div
          className={`${
            location === '/' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer `}
        >
          Sòng bạc
        </div>
        <div
          onClick={() => {
            setShowCasinoLive(!showCasinoLive)
            setShowKeno(false)
            setShowSportXS(false)
            setShowSABA(false)
          }}
          className={`${
            location === '/' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer  relative`}
        >
          <div
            className={`absolute transition-all duration-700 bg-[#182025] border-x border-[#ffffff29] w-[calc(100%+2px)] -translate-x-[1px] -bottom-2.5 left-0 ${
              showCasinoLive ? 'h-3' : 'h-0'
            } `}
          ></div>
          Casino trực tuyến
        </div>
        <div
          className={`col-span-3 ${
            showCasinoLive ? 'h-[350px]  border py-2' : 'h-0 py-0'
          } transition-all border-[#ffffff29]  px-2 grid grid-cols-3 gap-2 overflow-hidden rounded`}
        >
          {casinoLiveList.map((item, index) => (
            <div className='cursor-pointer' key={index}>
              <div className='border-[#085e5e] border h-[55px] relative overflow-hidden rounded-md bg-gradient-to-r from-[#0c2e4a] to-[#084d7f]'>
                <img
                  src={item.img}
                  alt={item.path}
                  loading='lazy'
                  className='absolute size-[135px] max-w-[135px] top-1/2 -translate-y-1/2 left-[8%]'
                />
                <div className='h-full absolute w-5 right-[68%] -bottom-3 skew-x-[-45deg] opacity-25 z-10 bg-[#ffffff61]'></div>
                <div className='h-full absolute w-[50px] right-[-8%] -top-3 skew-x-[-45deg] opacity-25 z-10 bg-[#ffffff61]'></div>
              </div>
              <p className='text-sm text-center mt-0.5 text-[#ffffffb3] line-clamp-1'>{item.title}</p>
            </div>
          ))}
        </div>
        <div
          onClick={() => {
            setShowSABA(!showSABA)
            setShowKeno(false)
            setShowSportXS(false)
            setShowCasinoLive(false)
          }}
          className={`${
            location === '/' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer  relative`}
        >
          Cổng game SABA
        </div>

        <div
          onClick={() => {
            setShowKeno(!showKeno)
            setShowSABA(false)
            setShowSportXS(false)
            setShowCasinoLive(false)
          }}
          className={`${
            location === '/' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer  relative`}
        >
          Keno/Xổ số
        </div>
        <div
          onClick={() => {
            setShowSportXS(!showSportXS)
            setShowSABA(false)
            setShowKeno(false)
            setShowCasinoLive(false)
          }}
          className={`${
            location === '/' ? 'text-[#19e5e6] border-[#19e5e6]' : 'text-[#ffffffb3] border-[#ffffff29]'
          } border text-center py-2 rounded text-[13px] md:text-sm  cursor-pointer  relative`}
        >
          Xổ số thể thao
        </div>
        <div
          className={`col-span-3 ${showSABA && 'h-[100px]'} ${(showKeno || showSportXS) && 'h-[180px]'} ${
            showSABA || showKeno || showSportXS ? '  border py-2' : 'h-0 py-0'
          } transition-all border-[#ffffff29]  px-2 grid grid-cols-3 gap-2 overflow-hidden rounded`}
        >
          {showSABA &&
            sabaList.map((item, index) => (
              <div className='cursor-pointer' key={index}>
                <div className='border-[#085e5e] border h-[55px] relative overflow-hidden rounded-md bg-gradient-to-r from-[#0c2e4a] to-[#084d7f]'>
                  <img
                    src={item.img}
                    alt={item.path}
                    loading='lazy'
                    className='absolute size-[135px] max-w-[135px] top-1/2 -translate-y-1/2 left-[8%]'
                  />
                  <div className='h-full absolute w-5 right-[68%] -bottom-3 skew-x-[-45deg] opacity-25 z-10 bg-[#ffffff61]'></div>
                  <div className='h-full absolute w-[50px] right-[-8%] -top-3 skew-x-[-45deg] opacity-25 z-10 bg-[#ffffff61]'></div>
                </div>
                <p className='text-sm text-center mt-0.5 text-[#ffffffb3] line-clamp-1'>{item.title}</p>
              </div>
            ))}
          {showKeno &&
            kenoList.map((item, index) => (
              <div className='cursor-pointer' key={index}>
                <div className='border-[#085e5e] border h-[55px] relative overflow-hidden rounded-md bg-gradient-to-r from-[#0c2e4a] to-[#084d7f]'>
                  <img
                    src={item.img}
                    alt={item.path}
                    loading='lazy'
                    className='absolute size-[135px] max-w-[135px] top-1/2 -translate-y-1/2 left-[8%]'
                  />
                  <div className='h-full absolute w-5 right-[68%] -bottom-3 skew-x-[-45deg] opacity-25 z-10 bg-[#ffffff61]'></div>
                  <div className='h-full absolute w-[50px] right-[-8%] -top-3 skew-x-[-45deg] opacity-25 z-10 bg-[#ffffff61]'></div>
                </div>
                <p className='text-sm text-center mt-0.5 text-[#ffffffb3] line-clamp-1'>{item.title}</p>
              </div>
            ))}
          {showSportXS &&
            xosoSportList.map((item, index) => (
              <div className='cursor-pointer' key={index}>
                <div className='border-[#085e5e] border h-[55px] relative overflow-hidden rounded-md bg-gradient-to-r from-[#0c2e4a] to-[#084d7f]'>
                  <img
                    src={item.img}
                    alt={item.path}
                    loading='lazy'
                    className='absolute size-[135px] max-w-[135px] top-1/2 -translate-y-1/2 left-[8%]'
                  />
                  <div className='h-full absolute w-5 right-[68%] -bottom-3 skew-x-[-45deg] opacity-25 z-10 bg-[#ffffff61]'></div>
                  <div className='h-full absolute w-[50px] right-[-8%] -top-3 skew-x-[-45deg] opacity-25 z-10 bg-[#ffffff61]'></div>
                </div>
                <p className='text-sm text-center mt-0.5 text-[#ffffffb3] line-clamp-1'>{item.title}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default CurrentPageButton
