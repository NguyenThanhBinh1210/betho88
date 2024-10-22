import React from 'react'

export interface MatchCardProps {
  league: string
  homeTeam: string
  awayTeam: string
  time: string
  isLive: boolean
  handicap: {
    home: { value: string; odds: number }
    away: { value: string; odds: number }
  }
  overUnder: {
    over: { value: string; odds: number }
    under: { value: string; odds: number }
  }
}

const MatchCard: React.FC<MatchCardProps> = ({ league, homeTeam, awayTeam, time, isLive, handicap, overUnder }) => {
  return (
    <div className='rounded cursor-pointer border border-borderColor-1000 hover:border-textActive overflow-hidden p-1 h-40 w-[325px] relative'>
      <div
        className='absolute bg-primary/40 top-0 left-0 w-full h-full'
        style={{ transform: 'skew(-31deg) translate(-64%, 0%)' }}
      ></div>
      <div className='relative'>
        <div className='w-full flex items-center'>
          <div className='h-[0.5px] w-[75px] -translate-y-0.5 bg-borderColor'></div>
          <p className='uppercase font-light text-textOpacity-800  pb-1 mx-auto text-center leading-7 w-[160px] line-clamp-1'>
            {league}
          </p>
          <div className='h-[0.5px] w-[75px] -translate-y-0.5 bg-borderColor'></div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='w-[114.48px] text-center text-xs text-textOpacity-800'>{homeTeam}</div>
          <div className='text-center leading-4'>
            <p className={`uppercase ${isLive ? 'text-textLive' : 'text-textOpacity-800'}`}>
              {isLive ? 'Trực tiếp' : 'Sắp diễn ra'}
            </p>
            <p className='text-textOpacity-800'>{time}</p>
          </div>
          <div className='w-[114.48px] text-center text-xs text-textOpacity-800'>{awayTeam}</div>
        </div>
        <div className='grid grid-cols-2 gap-1.5 mt-2 px-2'>
          <div className='space-y-1'>
            <p className='font-medium text-textOpacity-800 text-center '>Cược chấp</p>
            <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 font-medium'>
                  <p className='uppercase'>H</p>
                  <p className='uppercase'>{handicap?.home.value}</p>
                </div>
                <div className={`font-medium ${handicap?.home.odds < 0 ? 'text-textDanger' : 'text-textOpacity-800'}`}>
                  {handicap?.home.odds.toFixed(2)}
                </div>
              </div>
            </div>
            <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 font-medium'>
                  <p className='uppercase'>A</p>
                  <p className='uppercase '>{handicap?.away.value}</p>
                </div>
                <div className={`font-medium ${handicap?.away.odds < 0 ? 'text-textDanger' : 'text-textOpacity-800'}`}>
                  {handicap?.away.odds.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          <div className='space-y-1'>
            <p className='font-medium text-textOpacity-800 text-center '>Tài/Xỉu</p>
            <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 font-medium'>
                  <p className=''>o</p>
                  <p className='uppercase'>{overUnder?.over.value}</p>
                </div>
                <div
                  className={`font-medium ${overUnder?.over.odds < 0 ? 'text-textDanger' : 'text-textOpacity-800'}`}
                >
                  {overUnder?.over.odds.toFixed(2)}
                </div>
              </div>
            </div>
            <div className='bg-bgOpacity-100 text-textOpacity-300 rounded px-1.5 pr-2 py-0.5'>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 font-medium'>
                  <p className=''>u</p>
                  <p className='uppercase '>{overUnder?.under.value}</p>
                </div>
                <div
                  className={`font-medium ${overUnder?.under.odds < 0 ? 'text-textDanger' : 'text-textOpacity-800'}`}
                >
                  {overUnder?.under.odds.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
