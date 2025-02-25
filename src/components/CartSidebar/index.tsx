import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { remove, selectTotalPrice } from '../../store/cart'
import { Prices, Title, List, Item, ButtonSquare } from './styled'
import { formatPrice } from '../FoodList'

const CartSidebar = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const totalPrice = useSelector(selectTotalPrice)
  const dispatch = useDispatch()

  const removeFood = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <List>
        {items.map((item) => (
          <Item key={item.id}>
            <img src={item.foto} alt={item.nome} />
            <div>
              <Title>{item.nome}</Title>
              <p>{formatPrice(item.preco)}</p>
            </div>
            <button onClick={() => removeFood(item.id)} type="button" />
          </Item>
        ))}
      </List>
      <Prices>
        Valor total <span>{formatPrice(totalPrice)}</span>
      </Prices>
      <ButtonSquare className="full-width">
        Continuar para a entrega
      </ButtonSquare>
    </>
  )
}
