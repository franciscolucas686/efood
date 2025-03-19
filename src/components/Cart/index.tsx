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
import { openCheckout, closeCheckout } from '../../store/checkout'
import Checkout from '../../pages/Checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const { isOpen: isCheckoutOpen } = useSelector(
    (state: RootReducer) => state.checkout
  )
  const totalPrice = useSelector(selectTotalPrice)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFood = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    dispatch(openCheckout())
  }

  return (
    <CartContainer className={isOpen || isCheckoutOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {isCheckoutOpen ? (
          <Checkout onClose={() => dispatch(closeCheckout())} />
        ) : items.length > 0 ? (
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
            <ButtonSquare className="full-width" onClick={goToCheckout}>
              Continuar para a entrega
            </ButtonSquare>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
