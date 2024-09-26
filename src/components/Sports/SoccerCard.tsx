import GameCard from "../GameCard"
import bongda from '~/assets/icons/sport-1.webp'

const SoccerCard = ({ value }: { value: string }) => {
  return (
    <GameCard image={bongda} link='/' title='Bóng đá' value={value} />
  )
}

export default SoccerCard