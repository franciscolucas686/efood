import Button from '../Button'
import {
  ModalBox,
  ModalContent,
  CloseButton,
  Image,
  Titulo,
  Box,
  ButtonBox
} from './styles'
import { FoodCardProps } from '../FoodCard'

const Modal = ({
  food,
  onClose
}: {
  food: FoodCardProps | null
  onClose: () => void
}) => {
  if (!food) return null

  return (
    <ModalBox>
      <ModalContent className="container">
        <CloseButton onClick={onClose}>X</CloseButton>
        <Image src={food.image} alt={food.title} />
        <Box>
          <Titulo>{food.description}</Titulo>
          <ButtonBox>
            <Button>
              {food.button} - {food.price}
            </Button>
          </ButtonBox>
        </Box>
      </ModalContent>
      <div className="overlay"></div>
    </ModalBox>
  )
}

export default Modal
