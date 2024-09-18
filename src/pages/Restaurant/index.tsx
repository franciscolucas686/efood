import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import FoodList from '../../components/FoodList'

const PageRestaurant = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <FoodList />
    </>
  )
}

export default PageRestaurant
