import Button from '../Button'
import {
  ModalBox,
  ModalContent,
  CloseButton,
  Image,
  Titulo,
  Box,
  ButtonBox,
  Descricao,
  Porcao
} from './styles'
import { CardapioRestaurant } from '../../pages/Home'
import { formatPrice } from '../FoodList'

type ModalProps = {
  food: CardapioRestaurant
  onClose: () => void
}

const Modal = ({ food, onClose }: ModalProps) => {
  if (!food) return null

  return (
    <ModalBox>
      <ModalContent className="container">
        <CloseButton onClick={onClose}>X</CloseButton>
        <Image src={food.foto} alt={food.nome} />
        <Box>
          <Titulo>{food.nome}</Titulo>
          <Descricao>{food.descricao}</Descricao>
          <Porcao>
            {`Serve de `}
            {food.porcao}
          </Porcao>
          <ButtonBox>
            <Button>
              {`Adicionar ao carrinho`} - {formatPrice(food.preco)}
            </Button>
          </ButtonBox>
        </Box>
      </ModalContent>
      <div className="overlay"></div>
    </ModalBox>
  )
}

export default Modal
