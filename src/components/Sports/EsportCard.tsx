import GameCard from '../GameCard'
import image from '~/assets/icons/sport-43.webp'

const EsportCard = ({ value }: { value: string }) => {
  return <GameCard image={image} link='/' title='Thể thao điện tử' value={value} />
}

export default EsportCard
