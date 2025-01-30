import FoodCard, { FoodCardProps } from '../FoodCard'
import { List } from './styles'
import { useState } from 'react'
import imagePizza from '../../assets/images/pizza.png'
import Modal from '../Modal'

const mock = [
  {
    image: imagePizza,
    title: 'Pizza Peperoni',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, animiest. Nobis impedit pariatur neque saepe deserunt',
    button: 'Adicionar ao Carrinho',
    price: 'R$ 59,89'
  },
  {
    image: imagePizza,
    title: 'Pizza Peperoni',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, animiest. Nobis impedit pariatur neque saepe deserunt',
    button: 'Adicionar ao Carrinho',
    price: 'R$ 59,89'
  },
  {
    image: imagePizza,
    title: 'Pizza Peperoni',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, animiest. Nobis impedit pariatur neque saepe deserunt',
    button: 'Adicionar ao Carrinho',
    price: 'R$ 59,89'
  },
  {
    image: imagePizza,
    title: 'Pizza Peperoni',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, animiest. Nobis impedit pariatur neque saepe deserunt',
    button: 'Adicionar ao Carrinho',
    price: 'R$ 59,89'
  },
  {
    image: imagePizza,
    title: 'Pizza Peperoni',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, animiest. Nobis impedit pariatur neque saepe deserunt',
    button: 'Adicionar ao Carrinho',
    price: 'R$ 59,89'
  },
  {
    image: imagePizza,
    title: 'Pizza Peperoni',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, animiest. Nobis impedit pariatur neque saepe deserunt',
    button: 'Adicionar ao Carrinho',
    price: 'R$ 59,89'
  }
]

const FoodList = () => {
  const [selectedFood, setselectedFood] = useState<FoodCardProps | null>(null)

  const handleOpenModal = (food: FoodCardProps) => {
    setselectedFood(food)
  }

  const handleCloseModal = () => {
    setselectedFood(null)
  }

  return (
    <div className="container">
      <List>
        {mock.map((food, index) => (
          <FoodCard
            key={index}
            image={food.image}
            title={food.title}
            description={food.description}
            button={food.button}
            price={food.price}
            onClick={() => handleOpenModal(food)}
          />
        ))}
      </List>
      {selectedFood && <Modal food={selectedFood} onClose={handleCloseModal} />}
    </div>
  )
}

export default FoodList
