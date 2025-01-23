import Restaurant from '../../models/Restaurant'
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
          image={restaurant.image}
          title={restaurant.title}
          category={restaurant.category}
          info={restaurant.info}
          description={restaurant.description}
          id={restaurant.id}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
