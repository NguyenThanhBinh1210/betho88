import { useState } from 'react'
import imgage from '~/assets/icons/dk0gw0F03k0.png'
const HomeResults = () => {
  const [tabActive, setTabActice] = useState<number>(1)
  return (
    <div className='border border-[#5258bc] rounded-sm text-white'>
      <div className='flex items-center justify-center gap-x-10 md:gap-x-16 w-full bg-[#262b69] border-b-[#5258bc] '>
        <button
          onClick={() => setTabActice(1)}
          className={` md:text-xl py-2 border-b-3 ${tabActive === 1 ? 'border-orange-400' : ' text-gray-300 hover:scale-95 border-transparent'
            } transition-all `}
        >
          Hôm Nay
        </button>
        <div className='h-[20px] bg-[#7d81c9] border-[#5258bc] w-[1px]'></div>
        <button
          onClick={() => setTabActice(2)}
          className={` md:text-xl py-2 border-b-3 ${tabActive === 2 ? 'border-orange-400' : ' text-gray-300 hover:scale-95 border-transparent'
            } transition-all `}
        >
          Kết quả
        </button>
      </div>
      <div className='bg-[#0e1948] p-3'>
        <TabSport />
        <TabDay></TabDay>
        <div className='py-3 '>
          <div className='max-h-[382px] px-2 custom-scroll overflow-y-auto grid md:grid-cols-2 gap-3 gap-y-4'>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <div key={index} className='relative'>
                  <div
                    style={{
                      backgroundImage:
                        'linear-gradient(270deg, HSL(235, 53%, 40%) 9.78%, HSL(234, 64%, 57%) 24.24%, HSL(236, 48%, 39%) 55.96%, HSL(235, 64%, 66%) 81.15%, HSL(235, 51%, 37%) 99.34%)'
                    }}
                    className='absolute top-1 rounded-md left-0 w-full h-full -z-1'
                  ></div>
                  <div
                    style={{
                      backgroundImage:
                        'linear-gradient(299.35deg, HSL(237, 55%, 34%) 15.87%, HSL(234, 43%, 48%) 86.63%)'
                    }}
                    className='border-[#5258bc] border rounded relative'
                  >
                    <div
                      style={{
                        clipPath: 'polygon(0 0, 100% 0, 96% 100%, 5% 100%)',
                        backgroundImage: 'linear-gradient(110.26deg, HSL(235, 71%, 26%) 2.72%, HSL(241, 73%, 17%) 108%)'
                      }}
                      className='w-[235px] text-sm md:text-base mx-auto text-center py-0.5 md:py-1'
                    >
                      ARG Division 2
                    </div>
                    <div className='flex items-center justify-between py-2'>
                      <div className='w-[39%] flex items-center justify-end gap-2'>
                        <p className='text-xs md:text-base text-end'>Atletico Rafaela</p>
                        <img src={imgage} alt='imgage' loading='lazy' className='size-[22px] md:size-[35px]' />
                      </div>
                      <div className='w-[20%] font-medium'>
                        <div className='text-lg md:text-2xl text-center text-orange-300'>0 - 0</div>
                        <div className='text-gray-300 text-xs md:text-sm text-center'>Full time</div>
                      </div>
                      <div className='w-[39%] flex items-center justify-start gap-2'>
                        <img src={imgage} alt='imgage' loading='lazy' className='size-[22px] md:size-[35px]' />
                        <p className='text-xs md:text-base'>Atletico Rafaela</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const TabSport = () => {
  const [tabActive, setTabActice] = useState<number>(1)

  return (
    <div className='mt-3 grid grid-cols-3 gap-3 w-full sm:max-w-[765px]  mx-auto'>
      <button
        onClick={() => setTabActice(1)}
        className={`rounded transition-all border text-gray-400 py-2 border-[#5258bc] ${tabActive === 1 ? 'bg-[#5b67b3] text-white' : 'hover:bg-[#262b69]'
          } `}
      >
        Bóng đá
      </button>
      <button
        onClick={() => setTabActice(2)}
        className={`rounded transition-all border text-gray-400 py-2 border-[#5258bc] ${tabActive === 2 ? 'bg-[#5b67b3] text-white' : 'hover:bg-[#262b69]'
          } `}
      >
        Bóng rổ
      </button>
      <button
        onClick={() => setTabActice(3)}
        className={`rounded transition-all border text-gray-400 py-2 border-[#5258bc] ${tabActive === 3 ? 'bg-[#5b67b3] text-white' : 'hover:bg-[#262b69]'
          } `}
      >
        Cricket
      </button>
    </div>
  )
}

const TabDay = () => {
  const data = [
    {
      day: '15',
      text: 'Sun'
    },
    {
      day: '16',
      text: 'Mon'
    },
    {
      day: '17',
      text: 'Tue'
    },
    {
      day: '18',
      text: 'Wed'
    },
    {
      day: '19',
      text: 'Thu'
    },
    {
      day: '20',
      text: 'Fri'
    },
    {
      day: '21',
      text: 'Sat'
    }
  ]
  const [tabActive, setTabActice] = useState<string>(data[0].text)
  return (
    <div className='border-b border-[#5258bc]'>
      <div className=' md:mt-3  grid grid-cols-7 gap-3 md:gap-8 w-full sm:max-w-[765px]  mx-auto'>
        {data.map((item) => (
          <button
            key={item.text}
            onClick={() => setTabActice(item.text)}
            className={`text-xl py-2 border-b-3 ${tabActive === item.text ? 'border-orange-400' : ' text-gray-300 hover:scale-95 border-transparent'
              } transition-all `}
          >
            <p className='md:leading-5  text-sm md:text-xl'>{item.day}</p>
            <p className='text-xs md:text-sm'>{item.text}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
export default HomeResults
