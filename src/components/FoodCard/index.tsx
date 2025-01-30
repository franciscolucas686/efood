import Button from '../Button'
import { Descricao, FoodCardContainer, Titulo, Image } from './style'

export type FoodCardProps = {
  image: string
  title: string
  description: string
  button: string
  price: string
  onClick?: () => void
}

const FoodCard = ({
  image,
  title,
  description,
  button,
  price,
  onClick
}: FoodCardProps) => (
  <FoodCardContainer>
    <Image src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button onClick={onClick}>
      {button} {price}
    </Button>
  </FoodCardContainer>
)

export default FoodCard
