import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'
import { Card, Descrição, Titulo } from './styles'

type Props = {
  id: number
  image: string
  title: string
  category: string
  info: string
  description: string
}

const CardRestaurant = ({
  id,
  image,
  title,
  category,
  info,
  description
}: Props) => {
  const navigate = useNavigate()

  const pageChangeId = () => {
    navigate(`/PageRestaurant/${id}`)
  }

  return (
    <Card>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{info}</Tag>
      <Descrição>{description}</Descrição>
      <Button title="Saiba mais" onClick={pageChangeId}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default CardRestaurant
