import styled from 'styled-components'
import { cores } from '../../style'
import Button from '../Button'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 38px 8px 0 8px;
`

export const ButtonSquare = styled(Button)`
  border-radius: 0px;
`

export const Item = styled.li`
  background-color: ${cores.rosaClaro};
`
export const Title = styled.h3`
  color: ${cores.rosaEscuro};
`

export const Prices = styled.p`
  color: ${cores.branca};

  span {
    color: ${cores.branca};
  }
`
