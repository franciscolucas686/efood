import { HeaderContainer, Imagem, LogoContainer, Titulo } from './styles'
import Fundo from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.svg'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${Fundo})` }}>
    <HeaderContainer>
      <LogoContainer src={Logo} alt="logo" />
      <Titulo>
        Viva experiências gastronômicas <br></br> no conforto da sua casa
      </Titulo>
    </HeaderContainer>
  </Imagem>
)

export default Header
