import { useNavigate } from 'react-router-dom'
import Tag from '../Tag'
import { Card, Descrição, Titulo } from './styles'
import { Btn } from '../Button/styles'

type Props = {
  id: number
  image: string
  title: string
  category: string
  info: boolean | string
  description: string
}

export const capitalizeFirstLetter = (text: string) => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
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
    <Card onClick={pageChangeId}>
      <img src={image} alt={`Imagem do restaurante ${title}`} />
      <Titulo>{title}</Titulo>
      <Tag>{capitalizeFirstLetter(category)}</Tag>
      <Tag className={!info ? 'no-padding' : ''}>
        {info ? 'Destaque da semana' : ''}
      </Tag>
      <Descrição>{description}</Descrição>
      <Btn title="Saiba mais" onClick={pageChangeId}>
        Saiba mais
      </Btn>
    </Card>
  )
}

export default CardRestaurant
