import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Title,
  List,
  Item,
  ButtonSquare
} from './styled'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { close, remove, selectTotalPrice } from '../../store/cart'
import { formatPrice } from '../FoodList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const totalPrice = useSelector(selectTotalPrice)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFood = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
      <Sidebar>
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
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
