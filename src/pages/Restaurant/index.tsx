import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import FoodList from '../../components/FoodList'

const PageRestaurant = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams()

  return (
    <>
      <Hero />
      <FoodList />
    </>
  )
}

export default PageRestaurant
