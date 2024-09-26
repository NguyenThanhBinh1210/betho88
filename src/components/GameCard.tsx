import { Link } from 'react-router-dom'

interface Props {
  title: string
  value: string
  image: string
  link: string
}
const GameCard = ({ title, value, image, link }: Props) => {
  return (
    <Link
      to={link}
      className='flex relative overflow-hidden justify-between border border-[#075288] p-2 rounded border-l-[5px] bg-gradient-to-r from-[#111619] to-[#075186]'
    >
      <div className='flex flex-col'>
        <span className='text-white'>{title}</span>
        <div className='relative pb-3'>
          <span className='text-[#3c9add] font-bold text-4xl'>{value}</span>
          <span
            style={{
              transform: 'scaleY(-1)',
              background: 'linear-gradient(to bottom, black, #3c9add)', // Gradient từ trên xuống
              WebkitBackgroundClip: 'text', // Áp dụng gradient vào chữ
              WebkitTextFillColor: 'transparent' // Làm cho màu chữ trong su
            }}
            className='text-[#3c9add] absolute -bottom-5 left-0 font-bold text-4xl opacity-25'
          >
            {value}
          </span>
        </div>
      </div>
      <div className='text-[#ffffff0d] uppercase text-4xl font-medium leading-6'>{title}</div>
      <div className='absolute bottom-0 right-0 opacity-30'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
          <path
            fillRule='evenodd'
            d='M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
            clipRule='evenodd'
          />
          <path
            fillRule='evenodd'
            d='M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='absolute right-0 top-1/2 -translate-y-1/2'>
        <img className='w-[196px] h-[196px]' src={image} alt={image} />
      </div>
    </Link>
  )
}

export default GameCard
