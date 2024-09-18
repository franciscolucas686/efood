import Button from '../Button'
import { Descricao, FoodCardContainer, Titulo, Image } from './style'

const FoodCard = () => (
  <FoodCardContainer>
    <Image src="//placehold.it/316x167" alt="" />
    <Titulo>Pizza Peperoni</Titulo>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, animi
      est. Nobis impedit pariatur neque saepe deserunt
    </Descricao>
    <Button title={''} to={''}>
      Acidionar ao Carrinho
    </Button>
  </FoodCardContainer>
)

export default FoodCard
