import FoodCard from '../FoodCard'
import { List } from './styles'

const FoodList = () => (
  <div className="container">
    <List>
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
      <FoodCard />
    </List>
  </div>
)

export default FoodList
