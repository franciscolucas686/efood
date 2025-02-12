import {
  ButtonContainer,
  HeaderContainer,
  HeaderContainerRestaurant,
  Imagem,
  ImagemRestaurant,
  LogoContainer,
  Titulo
} from './styles'
import Logo from '../../assets/images/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { Btn } from '../Button/styles'

import { open } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const location = useLocation()

  const isCardRestaurantPage = location.pathname.includes('/PageRestaurant')

  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const openCart = () => {
    dispatch(open())
  }

  return isCardRestaurantPage ? (
    <ImagemRestaurant>
      <HeaderContainerRestaurant>
        <ButtonContainer>
          <Link to="/">
            <Btn>Restaurantes</Btn>
          </Link>
          <Link to="/">
            <LogoContainer src={Logo} alt="logo" />
          </Link>
          <Btn onClick={() => openCart()}>
            {items.length} produto(s) no carrinho
          </Btn>
        </ButtonContainer>
      </HeaderContainerRestaurant>
    </ImagemRestaurant>
  ) : (
    <Imagem>
      <HeaderContainer>
        <LogoContainer src={Logo} alt="logo" style={{ paddingTop: '40px' }} />
        <Titulo>
          Viva experiências gastronômicas <br></br> no conforto da sua casa
        </Titulo>
      </HeaderContainer>
    </Imagem>
  )
}

export default Header
