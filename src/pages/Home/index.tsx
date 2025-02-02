import { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../Restaurant'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  descricao: string
  capa: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
  }, [])
  return (
    <>
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
