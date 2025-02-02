import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import Tag from '../Tag'
import { Card, Descrição, Titulo } from './styles'

type Props = {
  id: number
  image: string
  title: string
  category: string
  info: boolean | string
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

  const capitalizeFirstLetter = (text: string) => {
    if (!text) return ''
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const pageChangeId = () => {
    navigate(`/PageRestaurant/${id}`)
  }

  return (
    <Card>
      <img src={image} alt={`Imagem do restaurante ${title}`} />
      <Titulo>{title}</Titulo>
      <Tag>{capitalizeFirstLetter(category)}</Tag>
      <Tag className={!info ? 'no-padding' : ''}>
        {info ? 'Destaque da semana' : ''}
      </Tag>
      <Descrição>{description}</Descrição>
      <Button title="Saiba mais" onClick={pageChangeId}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default CardRestaurant
