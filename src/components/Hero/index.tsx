import Tag from '../Tag'
import { Banner, Titulo } from './styles'
import { Restaurant } from '../../pages/Home'
import { capitalizeFirstLetter } from '../Restaurant'

type Props = {
  restaurant: Restaurant
}

const Hero = ({ restaurant }: Props) => (
  <Banner style={{ backgroundImage: `url(${restaurant.capa})` }}>
    <div className="container">
      <Tag>{capitalizeFirstLetter(restaurant.tipo)}</Tag>
      <Titulo>{restaurant.titulo}</Titulo>
    </div>
  </Banner>
)

export default Hero
