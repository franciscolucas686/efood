import styled from 'styled-components'
import { cores } from '../../style'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
`
export const Btn = styled.button`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosaEscuro};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  border: 2px solid ${cores.rosaClaro};
  cursor: pointer;
`
