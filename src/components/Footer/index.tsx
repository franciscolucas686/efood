import {
  FooterContainer,
  Imagem,
  LogoContainer,
  SocialIconsContainer,
  Titulo
} from './styles'
import Fundo from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.svg'
import { SocialIcon } from 'react-social-icons'

const Footer = () => (
  <Imagem style={{ backgroundImage: `url(${Fundo})` }}>
    <FooterContainer>
      <LogoContainer src={Logo} alt="logo" />
      <SocialIconsContainer>
        <SocialIcon
          network="instagram"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 30, width: 30 }}
          bgColor="#E66767"
        />
        <SocialIcon
          network="facebook"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 30, width: 30 }}
          bgColor="#E66767"
        />
        <SocialIcon
          network="twitter"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: 30, width: 30 }}
          bgColor="#E66767"
        />
      </SocialIconsContainer>
      <Titulo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade<br></br> dos produtos é toda do
        estabelecimento contratado.
      </Titulo>
    </FooterContainer>
  </Imagem>
)

export default Footer
