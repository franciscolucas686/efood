import Tag from '../Tag'
import { Banner, Titulo } from './styles'
import imageMassa from '../../assets/images/massa.png'

const Hero = () => (
  <Banner style={{ backgroundImage: imageMassa }}>
    <div className="container">
      <Tag>Carioca</Tag>
      <Titulo>Comida Carioca</Titulo>
    </div>
  </Banner>
)

export default Hero
