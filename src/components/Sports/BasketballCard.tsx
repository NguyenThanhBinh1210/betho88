import GameCard from "../GameCard"
import image from '~/assets/icons/sport-2.webp'

const BasketballCard = ({ value }: { value: string }) => {
  return (
    <GameCard image={image} link='/' title='Bóng rổ' value={value} />

  )
}

export default BasketballCard