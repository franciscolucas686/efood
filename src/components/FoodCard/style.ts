import styled from 'styled-components'
import { cores } from '../../style'

export const FoodCardContainer = styled.div`
  background-color: ${cores.rosaEscuro};
  padding: 8px;
  margin-bottom: 20px;
`
export const Image = styled.img`
  padding-bottom: 8px;
  display: block;
  width: 100%;
  height: 167px;
  object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${cores.rosaClaro};
  padding-bottom: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  max-width: 100%;
  color: ${cores.rosaClaro};
  padding-bottom: 8px;
`
