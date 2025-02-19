import { styled } from 'styled-components'
import { cores } from '../../style'
import Button from '../Button/index'

export const SidebarTest = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 0 8px;
  width: 360px;
`
export const Title2 = styled.h2`
  color: ${cores.rosaClaro};
  font-size: 16px;
  font-weight: bold;
  padding: 32px 0 16px 0;

  span {
    color: ${cores.rosaClaro};
  }
`
export const Paragraph = styled.p`
  font-size: 14px;
  color: ${cores.rosaClaro};
  padding-bottom: 16px;
`

export const ButtonSquare2 = styled(Button)`
  margin-bottom: 8px;
  margin-top: 8px;
  &.full-width {
    width: 100%;
  }
`
