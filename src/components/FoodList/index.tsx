import { List } from './styles'
import Modal from '../Modal'
import { CardapioRestaurant } from '../../pages/Home'
import FoodCard from '../FoodCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeModal, openModal } from '../../store/modal'

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
  const dispatch = useDispatch()

  const { selectedFood, isOpen } = useSelector(
    (state: RootReducer) => state.modal
  )

  const handleOpenModal = (food: CardapioRestaurant) => {
    dispatch(openModal(food))
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
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
      {isOpen && selectedFood && (
        <Modal food={selectedFood} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default FoodList
