import { useState } from 'react'

interface ChipProps {
  value: string
  disable?: boolean
  sportType?: string
  betType?: string
  teamName?: string
  odds?: number
  score?: string
  marketType?: string
  opponent?: string
  league?: string
  maxBet?: number
  ratio?: string
  isDouble?: boolean
}

const Chip = ({
  value,
  disable,
  sportType = 'Bóng đá',
  betType = 'Cược Chấp',
  teamName = 'Gwangju FC (N)',
  odds = -0.94,
  score = '[2-1]',
  marketType = 'MV',
  opponent = 'Johor Darul Takzim',
  league = 'AFC CHAMPIONS LEAGUE ELITE',
  maxBet = 1000,
  ratio,
  isDouble = false
}: ChipProps) => {
  const [showBettingInterface, setShowBettingInterface] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    if (!disable) {
      setShowBettingInterface(!showBettingInterface)
      setIsActive(!isActive)
    }
  }

  return (
    <div className='relative'>
      <div
        onClick={handleClick}
        className={`border-selectHover bg-gradient-to-b ${disable
            ? 'text-textOpacity-300'
            : 'hover:from-primary/80 hover:to-secondary hover:bg-gradient-to-br font-semibold'
          } transition-all from-secondary to-primary/80 border rounded py-1 cursor-pointer px-1.5 flex justify-between items-center ${isActive ? 'border-2 border-yellow-400 shadow-lg' : ''
          }`}
      >
        {isDouble ? (
          <>
            <span className='font-medium text-textOpacity-100'>{ratio}</span>
            <span className='text-textOpacity-800'>{!disable ? value : '--'}</span>
          </>
        ) : (
          <span className='w-full text-center text-textOpacity-800'>{!disable ? value : '--'}</span>
        )}
      </div>
      {showBettingInterface && !disable && (
        <div className='absolute top-full left-0 mt-2'>
          <BettingInterface
            sportType={sportType}
            betType={betType}
            teamName={teamName}
            odds={odds}
            score={score}
            marketType={marketType}
            opponent={opponent}
            league={league}
            maxBet={maxBet}
          />
        </div>
      )}
    </div>
  )
}

interface BettingInterfaceProps {
  sportType: string
  betType: string
  teamName: string
  odds: number
  score: string
  marketType: string
  opponent: string
  league: string
  maxBet: number
}

const BettingInterface = ({
  sportType,
  betType,
  teamName,
  odds,
  score,
  marketType,
  opponent,
  league,
  maxBet
}: BettingInterfaceProps) => {
  const [betAmount, setBetAmount] = useState('')
  const [payment, setPayment] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setBetAmount(value)
      setPayment(parseFloat(value) * Math.abs(odds))
    }
  }

  const handleQuickBet = (amount: number) => {
    setBetAmount(amount.toString())
    setPayment(amount * Math.abs(odds))
  }

  const handleMaxBet = () => {
    setBetAmount(maxBet.toString())
    setPayment(maxBet * Math.abs(odds))
  }

  const handleClearBet = () => {
    setBetAmount('')
    setPayment(0)
  }

  const handlePlaceBet = () => {
    console.log(`Placing bet: ${betAmount}`)
  }

  return (
    <div className='bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 absolute z-[60]'>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-sm'>{`${sportType} / ${betType}`}</span>
        <button className='text-gray-400 hover:text-white'>&times;</button>
      </div>
      <div className='mb-2'>
        <div className='text-sm'>{teamName}</div>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-bold'>{`0.00 ${score} @ ${odds} (${marketType})`}</span>
          <span className='text-green-500'>UT</span>
        </div>
      </div>
      <div className='flex flex-col gap-2 mb-2'>
        <div className='flex items-center bg-gray-700 px-2 py-1'>
          <span className='text-green-500 mr-2'>UT</span>
          <input
            type='text'
            className='w-full text-white rounded'
            placeholder='Nhập số tiền'
            value={betAmount}
            onChange={handleInputChange}
          />
          <button className='ml-2 text-gray-400 hover:text-white' onClick={handleClearBet}>
            &times;
          </button>
        </div>
        <div className='flex justify-between items-center text-sm'>
          <span>Thanh toán</span>
          <span>{payment.toFixed(2)}</span>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2 mb-4'>
        <button className='bg-gray-700 hover:bg-gray-600 py-1 px-2 rounded' onClick={() => handleQuickBet(30)}>
          +30
        </button>
        <button className='bg-gray-700 hover:bg-gray-600 py-1 px-2 rounded' onClick={() => handleQuickBet(60)}>
          +60
        </button>
        <button className='bg-gray-700 hover:bg-gray-600 py-1 px-2 rounded' onClick={handleMaxBet}>
          Tối đa
        </button>
      </div>
      <div className='mb-4'>
        <div className='text-sm mb-1'>{teamName}</div>
        <div className='text-sm'>{opponent}</div>
        <div className='text-xs text-gray-400'>{league}</div>
      </div>
      <button className='bg-blue-500 hover:bg-blue-600 w-full py-2 rounded-lg mb-2' onClick={handlePlaceBet}>
        Đặt cược
      </button>
      <button className='bg-gray-700 hover:bg-gray-600 w-full py-2 rounded-lg' onClick={handleClearBet}>
        Xóa tất cả
      </button>
    </div>
  )
}

export default Chip
