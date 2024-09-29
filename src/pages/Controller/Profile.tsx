import { Accordion, AccordionItem } from '@nextui-org/react'

const Profile = () => {
  return (
    <div>
      <div className='bg-[#0a3a5c] static top-0 py-3 px-2 text-white font-bold'>Tôi</div>
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
            <div className='mt-1 h-max cursor-pointer'>
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

          <div className='mt-3  border border-[#0a3a5c] rounded-lg p-3'>
            s
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
