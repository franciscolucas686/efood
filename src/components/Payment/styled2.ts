import styled from 'styled-components'
import { cores } from '../../style'
import Button from '../Button'

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
`
export const Label = styled.label`
  display: block;
  color: ${cores.rosaClaro};
  font-size: 14px;
  padding-bottom: 8px;
`
export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 14px;
  border: 8px solid ${cores.branca};
  display: inline;
  margin-bottom: 8px;
`

export const Box = styled.div`
  display: flex;
  gap: 34px;
`
export const ContainerInput = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`
export const CardNumberContainer = styled.div`
  width: 80%;
`
export const CVVContainer = styled.div`
  width: 20%;
`
export const ContainerData = styled.div`
  display: block;
`
export const ButtonSquare = styled(Button)`
  margin-bottom: 8px;
  margin-top: 8px;
  &.full-width {
    width: 100%;
  }
`
