import { Restaurant } from '../../pages/Home'
import CardRestaurant from '../Restaurant'
import { List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <div className="container">
    <List>
      {restaurants.map((restaurant) => (
        <CardRestaurant
          key={restaurant.id}
          image={restaurant.capa}
          title={restaurant.titulo}
          category={restaurant.tipo}
          info={restaurant.destacado}
          description={restaurant.descricao}
          id={restaurant.id}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
