import { Label, Title, Input, ContainerInput, Box } from './styled'
import { ButtonSquare } from '../CartSidebar/styled'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Address = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <Title>Entrega</Title>
      <ContainerInput>
        <Label htmlFor="">Quem irá receber</Label>
        <Input type="text" />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor="">Endereço</Label>
        <Input type="text" />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor="">Cidade</Label>
        <Input type="text" />
      </ContainerInput>
      <Box>
        <ContainerInput>
          <Label htmlFor="">CEP</Label>
          <Input type="number" />
        </ContainerInput>
        <ContainerInput>
          <Label htmlFor="">Número</Label>
          <Input type="number" />
        </ContainerInput>
      </Box>
      <ContainerInput>
        <Label htmlFor="">Complemento (opinional)</Label>
        <Input type="text" />
      </ContainerInput>
      <ButtonSquare className="full-width margin-top">
        Continuar com o pagamento
      </ButtonSquare>
      <ButtonSquare className="full-width">Voltar para o carrinho</ButtonSquare>
    </>
  )
}

export default Address
