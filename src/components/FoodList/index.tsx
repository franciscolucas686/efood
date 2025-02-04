import { List } from './styles'
import { useState } from 'react'
import Modal from '../Modal'
import { CardapioRestaurant } from '../../pages/Home'
import FoodCard from '../FoodCard'

type Props = {
  cardapio: CardapioRestaurant[]
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const FoodList = ({ cardapio }: Props) => {
  const [selectedFood, setselectedFood] = useState<CardapioRestaurant | null>(
    null
  )

  const handleOpenModal = (food: CardapioRestaurant) => {
    setselectedFood(food)
  }

  const handleCloseModal = () => {
    setselectedFood(null)
  }

  return (
    <div className="container">
      <List>
        {cardapio.map((food) => (
          <FoodCard
            key={food.id}
            image={food.foto}
            title={food.nome}
            description={food.descricao}
            button={`Adicionar ao carrinho`}
            price={formatPrice(food.preco)}
            onClick={() => handleOpenModal(food)}
            id={0}
          />
        ))}
      </List>
      {selectedFood && <Modal food={selectedFood} onClose={handleCloseModal} />}
    </div>
  )
}

export default FoodList
