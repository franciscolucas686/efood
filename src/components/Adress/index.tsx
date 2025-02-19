import { SidebarTest, Label, Title, Input, ContainerInput, Box } from './styled'
import { ButtonSquare } from '../Cart/styled'

const Adress = () => (
  <SidebarTest>
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
    <ButtonSquare className="full-width">
      Continuar com o pagamento
    </ButtonSquare>
    <ButtonSquare className="full-width">Voltar para o carrinho</ButtonSquare>
  </SidebarTest>
)
