import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import FoodList from '../../components/FoodList'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Home'

const PageRestaurant = () => {
  const { id } = useParams()

  const [restaurants, setRestaurants] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [id])

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
