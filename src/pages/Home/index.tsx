import { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  descricao: string
  capa: string
  cardapio: CardapioRestaurant[]
}

export type CardapioRestaurant = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <RestaurantList restaurants={restaurants} />
    </>
  )
}

export default Home
