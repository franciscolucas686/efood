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
import { useState } from 'react'
import Checkout from '../../pages/Checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const totalPrice = useSelector(selectTotalPrice)
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const removeFood = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    setShowCheckout(true)
    closeCart()
  }

  return (
    <>
      {showCheckout ? (
        <Checkout onClose={() => setShowCheckout(true)} />
      ) : (
        <CartContainer className={isOpen ? 'is-open' : ''}>
          {!showCheckout && <Overlay onClick={() => closeCart()} />}
          <Sidebar>
            {items.length > 0 ? (
              <>
                <List>
                  {items.map((item) => (
                    <Item key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <Title>{item.nome}</Title>
                        <p>{formatPrice(item.preco)}</p>
                      </div>
                      <button
                        onClick={() => removeFood(item.id)}
                        type="button"
                      />
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
                O carrinho está vazio, adicione pelo menos um produto para
                continuar com a compra
              </p>
            )}
          </Sidebar>
        </CartContainer>
      )}
    </>
  )
}

export default Cart
