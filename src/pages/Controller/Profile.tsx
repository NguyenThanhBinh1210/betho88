import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { useState } from 'react'
import Betting from '~/components/Profile/Betting'
import ChangeLanguage from '~/components/Profile/ChangeLanguage'
import ChangePassword from '~/components/Profile/ChangePassword'
import ChangeUsername from '~/components/Profile/ChangeUsername'
import DefaultBet from '~/components/Profile/DefaultBet'
import FastBet from '~/components/Profile/FastBet'
import HelpNewbie from '~/components/Profile/HelpNewbie'
import MatchArrangement from '~/components/Profile/MatchArrangement'
import SetContact from '~/components/Profile/SetContact'
import SportBot from '~/components/Profile/SportBot'
import TypeExchangeRate from '~/components/Profile/TypeExchangeRate'

const Profile = () => {
  const [functionActive, setFunctionActive] = useState<string>('')
  return (
    <div>
      <div className='bg-[#0a3a5c] sticky top-0 py-3 px-2 text-white font-bold'>Tôi</div>
      <div className='p-2 py-3 text-[#74dcdc]'>
        <div className='px-1 flex justify-between mb-5'>
          <div className='flex gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='size-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
            <div className='text-sm'>
              <p>U4W0012120</p>
              <p className='text-xs'>Loại tiền tệ : UT</p>
            </div>
            <div className='mt-1 h-max cursor-pointer ' onClick={() => setFunctionActive('username')}>
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
                  d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125'
                />
              </svg>
            </div>
          </div>
          <div className='flex gap-2'>
            <button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
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
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
                />
              </svg>
            </button>
          </div>
        </div>
        <Accordion className='px-0'>
          <AccordionItem
            className='bg-[#082d47] rounded-lg '
            key='1'
            aria-label='Accordion 1'
            title={
              <div className='text-white space-y-2 px-4  '>
                <div>
                  <p className='text-sm text-gray-300'>Số dư</p>
                  <p className='ml-2 font-bold text-xl'>0.00</p>
                </div>
                <div>
                  <p className='text-sm text-gray-300'>Hạn mức còn lại</p>
                  <p className='ml-2 font-bold text-xl'>0.00</p>
                </div>
              </div>
            }
          >
            <div className='p-2 bg-[#0a3a5c] text-white space-y-2'>
              <div className='border rounded-md py-1 px-2 border-foreground-400'>
                <p className='text-xs'>Chưa xử lý</p>
                <p className='text-lg font-bold'>0.00</p>
              </div>
              <div className='border rounded-md py-1 px-2 border-foreground-400'>
                <p className='text-xs'>Giá trị ròng</p>
                <p className='text-lg font-bold'>0.00</p>
              </div>
              <div className='border rounded-md py-1 px-2 border-foreground-400'>
                <p className='text-xs'>Hạn mức được cấp</p>
                <p className='text-lg font-bold'>0.00</p>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
        <div className='px-2'>
          <div className='mt-3  border border-[#0a3a5c] rounded-lg p-3 text-white grid grid-cols-4 gap-4'>
            <div
              onClick={() => setFunctionActive('type-exchange-rate')}
              className=' cursor-pointer flex flex-col justify-start text-center items-center'
            >
              <div className='bg-[#0a3a5c] rounded-md w-11 h-11'></div>
              <p className='text-xs mt-1'>Loại tỉ lệ cược</p>
            </div>
            <div
              onClick={() => setFunctionActive('default-bet')}
              className=' cursor-pointer flex flex-col justify-start text-center items-center'
            >
              <div className='bg-[#0a3a5c] rounded-md w-11 h-11'></div>
              <p className='text-xs mt-1'>Tiền cược mặc định</p>
            </div>
            <div
              onClick={() => setFunctionActive('fast-bet')}
              className=' cursor-pointer flex flex-col justify-start text-center items-center'
            >
              <div className='bg-[#0a3a5c] rounded-md w-11 h-11'></div>
              <p className='text-xs mt-1'>Tiền cược nhanh</p>
            </div>
            <div
              onClick={() => setFunctionActive('betting')}
              className=' cursor-pointer flex flex-col justify-start text-center items-center'
            >
              <div className='bg-[#0a3a5c] rounded-md w-11 h-11'></div>
              <p className='text-xs mt-1'>Đang cược</p>
            </div>
            <div
              onClick={() => setFunctionActive('match-arrangement')}
              className=' cursor-pointer flex flex-col justify-start text-center items-center'
            >
              <div className='bg-[#0a3a5c] rounded-md w-11 h-11'></div>
              <p className='text-xs mt-1'>Sắp xếp trận đấu</p>
            </div>
            <div className=' cursor-pointer flex flex-col justify-start text-center items-center'>
              <div className='bg-[#0a3a5c] rounded-md w-11 h-11'></div>
              <p className='text-xs mt-1'>Môn thể thao ưu tiên</p>
            </div>
            <div
              onClick={() => setFunctionActive('help-newbie')}
              className=' cursor-pointer flex flex-col justify-start text-center items-center'
            >
              <div className='bg-[#0a3a5c] rounded-md w-11 h-11'></div>
              <p className='text-xs mt-1'>Người mới giúp đỡ</p>
            </div>
          </div>
        </div>
        <div className='px-2 text-white text-xs mt-2'>
          <div
            onClick={() => setFunctionActive('password')}
            className='flex justify-between items-center py-4 border-b border-gray-700 cursor-pointer'
          >
            <p>Cài đặt mật khẩu</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
            </svg>
          </div>
          <div
            onClick={() => setFunctionActive('language')}
            className='flex justify-between items-center py-4 border-b border-gray-700 cursor-pointer'
          >
            <p>Ngôn ngữ</p>
            <div className=' flex items-center gap-2'>
              <p className='text-[#74dcdc]'>Tiếng Việt</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </div>
          </div>
          <div
            onClick={() => setFunctionActive('sportsbook')}
            className='flex justify-between items-center py-4 border-b border-gray-700 cursor-pointer'
          >
            <p>Sportsbook Bot</p>
            <div className=' flex items-center gap-2'>
              <p className='text-[#74dcdc]'>Đã huỷ liên kết tài khoản</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            </div>
          </div>
          <div
            onClick={() => setFunctionActive('contact')}
            className='flex justify-between items-center py-4 border-b border-gray-700 cursor-pointer'
          >
            <p>Liên hệ</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
            </svg>
          </div>
          <div className='flex justify-between items-center py-4 border-b border-gray-700 cursor-pointer'>
            <p>Tin tài khoản</p>
            <div className=' flex flex-col text-end'>
              <p>Truy cập gần nhất : 2024/10/3 07:35:00</p>
              <p>Giao dịch gần nhất : 2024/10/3 07:36:13</p>
            </div>
          </div>
          <div className=' py-4 border-b border-gray-700'>
            <p>Phiên bản</p>
            <div className='grid grid-cols-2 mt-2 border border-[#ffffff29] rounded'>
              <div className='cursor-pointer flex items-center justify-center gap-2 py-2 bg-[#0a3a5c] text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 6 6 9-13.5' />
                </svg>

                <p>Rút gọn</p>
              </div>
              <div className='cursor-pointer flex items-center justify-center gap-2 py-2 text-[#74dcdc] '>
                <p>Tiêu chuẩn</p>
              </div>
            </div>
            <div className='mt-2 border border-[#0a3a5c] rounded flex items-center justify-center gap-2 py-2 bg-[#081421]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5'
                />
              </svg>

              <p>Chuyển sang phiên bản dành cho người có kinh nghiệm</p>
            </div>
          </div>

          <Button variant='light' className='font-semibold text-[#74dcdc] block mx-auto mt-3'>
            Thoát
          </Button>
        </div>
      </div>
      <ChangePassword show={functionActive === 'password'} onClose={() => setFunctionActive('')} />
      <ChangeUsername show={functionActive === 'username'} onClose={() => setFunctionActive('')} />
      <ChangeLanguage show={functionActive === 'language'} onClose={() => setFunctionActive('')} />
      <SportBot show={functionActive === 'sportsbook'} onClose={() => setFunctionActive('')} />
      <SetContact show={functionActive === 'contact'} onClose={() => setFunctionActive('')} />
      <TypeExchangeRate show={functionActive === 'type-exchange-rate'} onClose={() => setFunctionActive('')} />
      <DefaultBet show={functionActive === 'default-bet'} onClose={() => setFunctionActive('')} />
      <FastBet show={functionActive === 'fast-bet'} onClose={() => setFunctionActive('')} />
      <Betting show={functionActive === 'betting'} onClose={() => setFunctionActive('')} />
      <MatchArrangement show={functionActive === 'match-arrangement'} onClose={() => setFunctionActive('')} />
      <HelpNewbie show={functionActive === 'help-newbie'} onClose={() => setFunctionActive('')} />
    </div>
  )
}

export default Profile
