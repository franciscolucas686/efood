import { FooterContainer, Imagem, LogoContainer, Titulo } from './styles'
import Fundo from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.svg'

const Footer = () => (
  <Imagem style={{ backgroundImage: `url(${Fundo})` }}>
    <FooterContainer>
      <LogoContainer src={Logo} alt="logo" />
      <Titulo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade<br></br> dos produtos é toda do
        estabelecimento contratado.
      </Titulo>
    </FooterContainer>
  </Imagem>
)

export default Footer
