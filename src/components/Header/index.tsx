import { HeaderContainer, Imagem, LogoContainer, Titulo } from './styles'
import Fundo from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${Fundo})` }}>
    <HeaderContainer>
      <Link to="/">
        <LogoContainer src={Logo} alt="logo" />
      </Link>
      <Titulo>
        Viva experiências gastronômicas <br></br> no conforto da sua casa
      </Titulo>
    </HeaderContainer>
  </Imagem>
)

export default Header
