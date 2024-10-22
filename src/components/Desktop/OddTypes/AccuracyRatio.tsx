import React, { useMemo } from 'react'
import Chip from '~/components/Chip/Chip'
import AccordionInTab from '../AccordionInTab'

interface AccuracyRatioProps {
  type: 'normal' | '1orFull'
  data?: {
    scores: Array<{
      score: string
      odds: number
      disabled?: boolean
    }>
  }
}

const AccuracyRatio: React.FC<AccuracyRatioProps> = ({ type, data }) => {
  const scores = useMemo(() => {
    const defaultScores = [
      '1-0',
      '2-0',
      '2-1',
      '3-0',
      '3-1',
      '3-2',
      '4-0',
      '4-1',
      '4-2',
      '4-3',
      '0-0',
      '1-1',
      '2-2',
      '3-3',
      '4-4',
      'AOS'
    ]

    if (data?.scores) {
      return data.scores
    }

    return defaultScores.map((score) => ({
      score,
      odds: 2.33,
      disabled:
        score === '0-0' || score === '1-1' || score === '2-2' || score === '3-3' || score === '4-4' || score === 'AOS'
    }))
  }, [data])

  const renderChips = (odds: number, disabled?: boolean) => {
    if (type === 'normal' || (type === '1orFull' && !disabled)) {
      return (
        <div className='flex flex-col justify-center space-y-1.5'>
          <Chip value={odds.toFixed(2)} disable={disabled} />
          {type === 'normal' && <Chip value={odds.toFixed(2)} disable={!disabled} />}
        </div>
      )
    }
    return null
  }

  return (
    <AccordionInTab title='Tỉ số chính xác'>
      <div className='grid grid-cols-[repeat(16,minmax(0,1fr))] pt-1 gap-x-1.5'>
        {scores.map(({ score, odds, disabled }, index) => (
          <div key={index} className={`space-y-1.5 ${disabled ? 'translate-y-1/2' : ''}`}>
            <p className='text-center text-xs text-textOpacity-200'>{score}</p>
            {renderChips(odds, disabled)}
          </div>
        ))}
      </div>
    </AccordionInTab>
  )
}

export default AccuracyRatio
