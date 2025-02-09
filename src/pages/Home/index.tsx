import RestaurantList from '../../components/RestaurantList'
import { useGetHomePageQuery } from '../../services/api'

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
  porcao: string
}

const Home = () => {
  const { data: restaurants } = useGetHomePageQuery()

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
