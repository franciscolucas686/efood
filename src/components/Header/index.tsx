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

const Header = () => {
  const location = useLocation()

  const isCardRestaurantPage = location.pathname.includes('/PageRestaurant')

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
          <Btn>0 produto(s) no carrinho</Btn>
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
