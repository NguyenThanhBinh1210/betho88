/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/images/avatar10.png'
import { menuCMS } from '~/constants/renaral.const'
const SideBar = ({ isShow }: { isShow: boolean }) => {
  // const [open, setOpen] = useState(0)
  // const handleOpen = (value: any) => setOpen(open === value ? 0 : value)

  return (
    <div
      className={`${isShow ? '' : ' overflow-hidden opacity-0 invisible -translate-x-full '
        } bg-white no-scrollbar border-r fixed z-40 left-0 overflow-auto h-screen  transition-all duration-500 py-4`}
    >
      <div className={`w-[264px] overflow-hidden transition-all duration-300`}>
        <div className='px-5'>
          <img src={logo} alt='logo' loading='lazy' width={31} className='block mx-auto' />
          <div className='text-center mt-4'>
            <p className='font-bold'>Nguyễn Thanh Bình</p>
            <p className='text-xs'>thanhbinh12369yt@gmail.com</p>
            <p className='font-bold'>Admin</p>
          </div>
          <div className='p-2.5 py-1.5 rounded-full border border-gray-800 mt-6 mb-5'>
            <input type='text' className='text-sm' placeholder='Tìm kiếm trong menu ' />
          </div>
        </div>
        <div>
          {menuCMS.map((item, index) => (
            <div key={index}>
              {item.path ? (
                <Link to={`/seller/${item.path}`} className='flex px-5 justify-between items-center  py-2.5'>
                  <div className='flex items-center gap-x-1.5'>
                    {item.icon}
                    <p className='text-sm'>{item.title}</p>
                  </div>
                  {item.title === 'Đơn hàng' && (
                    <div className='text-white font-normal text-xs bg-black  w-5 h-5 rounded flex items-center justify-center'>
                      5
                    </div>
                  )}
                </Link>
              ) : (
                // <Accordion
                //   placeholder=''
                //   className='px-5'
                //   open={open === index + 1}
                //   icon={
                //     <div className='flex items-center gap-x-1'>
                //       <Icon id={index + 1} open={open} />
                //       {item.title === 'Các sản phẩm' && (
                //         <div className='text-white font-normal text-xs bg-black  w-5 h-5 rounded flex items-center justify-center'>
                //           0
                //         </div>
                //       )}
                //     </div>
                //   }
                // >
                //   <AccordionHeader className='py-2.5 border-b-0' placeholder='' onClick={() => handleOpen(index + 1)}>
                //     <div className='flex items-center gap-x-2 text-black font-normal text-sm'>
                //       {item.icon}
                //       {item.title}
                //     </div>
                //   </AccordionHeader>
                //   <AccordionBody className='p-0'>
                //     <ul className='ml-4 text-gray-600 text-sm'>
                //       {item.subMenu?.map((items, indexs) => (
                //         <li className='py-1.5' key={indexs}>
                //           <Link className='' to={`/seller${items.path}`}>
                //             {items.title}
                //           </Link>
                //         </li>
                //       ))}
                //     </ul>
                //   </AccordionBody>
                // </Accordion>
                'clm'
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// function Icon({ id, open }: any) {
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       fill='none'
//       viewBox='0 0 24 24'
//       strokeWidth={2}
//       stroke='currentColor'
//       className={`${id === open ? 'rotate-180' : ''} h-3 w-3 transition-transform`}
//     >
//       <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
//     </svg>
//   )
// }
export default SideBar
