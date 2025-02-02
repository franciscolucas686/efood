import styled from 'styled-components'
import { cores } from '../../style'

export const TagContainer = styled.div`
  background-color: ${cores.rosaEscuro};
  color: ${cores.rosaClaro};
  font-size: 12px;
  text-align: center;
  display: inline-block;
  margin-right: 12px;
  padding: 4px 6px;

  &.no-padding {
    padding: 0px;
  }
`
