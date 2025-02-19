import styled from 'styled-components'
import { cores } from '../../style'
import Button from '../Button/index'

import lixeira from '../../assets/images/lixeira.png'

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
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 0 8px;
  width: 360px;
  display: block;
`

export const ButtonSquare = styled(Button)`
  margin-bottom: 8px;
  &.full-width {
    width: 100%;
  }
`

export const List = styled.ul`
  padding: 32px 0;
`

export const Item = styled.li`
  display: flex;
  background-color: ${cores.rosaClaro};
  position: relative;
  margin-bottom: 16px;
  padding: 8px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`
export const Title = styled.h3`
  color: ${cores.rosaEscuro};
  padding-bottom: 16px;
`

export const Prices = styled.p`
  justify-content: space-between;
  color: ${cores.branca};
  margin-top: 8px;
  margin-bottom: 16px;

  span {
    color: ${cores.branca};
  }
`
