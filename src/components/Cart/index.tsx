import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Title,
  Item,
  ButtonSquare
} from './styled'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <Item>
          <Title>TÍtulo</Title>
          <p>R$ 60,99</p>
        </Item>
      </ul>
      <Prices>
        Valor total <span>R$ 120,90</span>
      </Prices>
      <ButtonSquare>Continuar para a entrega</ButtonSquare>
    </Sidebar>
  </CartContainer>
)

export default Cart
