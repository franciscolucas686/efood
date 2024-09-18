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
`
