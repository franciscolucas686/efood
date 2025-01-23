import Button from '../Button'
import { Descricao, FoodCardContainer, Titulo, Image } from './style'
import imagePizza from '../../assets/images/pizza.png'

const FoodCard = () => (
  <FoodCardContainer>
    <Image src={imagePizza} alt="Pizza" />
    <Titulo>Pizza Peperoni</Titulo>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, animi
      est. Nobis impedit pariatur neque saepe deserunt
    </Descricao>
    <Button title={''}>Acidionar ao Carrinho</Button>
  </FoodCardContainer>
)

export default FoodCard
