import Tag from '../Tag'
import { Banner, Titulo } from './styles'

const Hero = () => (
  <Banner
    style={{ backgroundImage: `url(https://via.placeholder.com/1500x280)` }}
  >
    <div className="container">
      <Tag>Carioca</Tag>
      <Titulo>Comida Carioca</Titulo>
    </div>
  </Banner>
)

export default Hero
