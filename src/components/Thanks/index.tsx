import { ButtonSquare2, Paragraph, SidebarTest, Title2 } from './styled2'

const Thanks = () => (
  <SidebarTest>
    <Title2>
      Pedido realizado - <span>Número do pedido</span>
    </Title2>
    <Paragraph>
      Estamos felizes em informar que seu pedido já está em processo de
      preparação e, em breve, será entregue no endereço fornecido.
    </Paragraph>
    <Paragraph>
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
      realizar cobranças extras.
    </Paragraph>

    <Paragraph>
      Lembre-se da importância de higienizar as mãos após o recebimento do
      pedido, garantindo assim sua segurança e bem-estar durante a refeição.
    </Paragraph>

    <Paragraph>
      Esperamos que desfrute de uma deliciosa e agradável experiência
      gastronômica. Bom apetite!
    </Paragraph>
    <ButtonSquare2 className="full-width">Concluir</ButtonSquare2>
  </SidebarTest>
)
