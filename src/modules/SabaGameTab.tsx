import BasketballCard from '~/components/Sports/BasketballCard'
import EsportCard from '~/components/Sports/EsportCard'
import SoccerCard from '~/components/Sports/SoccerCard'

const SabaGameTab = () => {
  return (
    <div className='space-y-2'>
      <SoccerCard value='44' />
      <BasketballCard value='12' />
      <EsportCard value='435' />
      <div className='grid  md:grid-cols-2 gap-2'>
        <SoccerCard value='44' />
        <BasketballCard value='12' />
        <EsportCard value='435' />
        <SoccerCard value='44' />
        <BasketballCard value='12' />
        <EsportCard value='435' />
      </div>
    </div>
  )
}

export default SabaGameTab
