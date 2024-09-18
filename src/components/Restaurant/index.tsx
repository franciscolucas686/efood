import Button from '../Button'
import Tag from '../Tag'
import { Card, Descrição, Titulo } from './styles'

type Props = {
  image: string
  title: string
  category: string
  info: string
  description: string
}

const CardRestaurant = ({
  image,
  title,
  category,
  info,
  description
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{info}</Tag>
    <Descrição>{description}</Descrição>
    <Button title="Saiba Mais" to="/">
      Saiba mais
    </Button>
  </Card>
)

export default CardRestaurant
