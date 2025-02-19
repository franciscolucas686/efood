import styled from 'styled-components'
import { cores } from '../../style'

export const SidebarTest = styled.aside`
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  padding: 0 8px;
  width: 360px;
`

export const Title = styled.h2`
  color: ${cores.rosaClaro};
  font-size: 16px;
  font-weight: bold;
  padding: 32px 0 16px 0;
`
export const ContainerInput = styled.div`
  padding-bottom: 8px;
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

  &:focus {
    outline: none;
  }
`

export const Box = styled.div`
  display: flex;
  gap: 34px;
`
