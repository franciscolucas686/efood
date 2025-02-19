import {
  Box,
  Input,
  Label,
  Title2,
  ContainerInput,
  CardNumberContainer,
  CVVContainer,
  ContainerData,
  SidebarTest,
  ButtonSquare
} from '../Payment/styled2'

const Payment = () => (
  <SidebarTest>
    <Title2>Pagamento - Valor a pagar R$ 190,90 </Title2>
    <div>
      <Label htmlFor="">Nome no cartão</Label>
      <Input type="text" />
    </div>
    <ContainerInput>
      <CardNumberContainer>
        <Label htmlFor="">Número do cartão</Label>
        <Input type="number" />
      </CardNumberContainer>
      <CVVContainer>
        <Label htmlFor="">CVV</Label>
        <Input type="number" />
      </CVVContainer>
    </ContainerInput>
    <Box>
      <ContainerData>
        <Label htmlFor="">Mês de vencimento</Label>
        <Input type="number" />
      </ContainerData>
      <ContainerData>
        <Label htmlFor="">Ano de vencimento</Label>
        <Input type="number" />
      </ContainerData>
    </Box>
    <ButtonSquare className="full-width">Finalizar pagamento</ButtonSquare>
    <ButtonSquare className="full-width">
      Voltar para a edição de endereço
    </ButtonSquare>
  </SidebarTest>
)
