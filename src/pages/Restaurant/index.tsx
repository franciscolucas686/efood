import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import FoodList from '../../components/FoodList'
import { useGetRestaurantPageQuery } from '../../services/api'

type CardapioParams = {
  id: string
}

const PageRestaurant = () => {
  const { id } = useParams() as CardapioParams
  const { data: restaurants } = useGetRestaurantPageQuery(id)

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero restaurant={restaurants} />
      <FoodList cardapio={restaurants.cardapio} />
    </>
  )
}

export default PageRestaurant
