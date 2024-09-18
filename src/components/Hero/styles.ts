import styled from 'styled-components'
import { cores } from '../../style'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 280px;
  width: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    ${TagContainer} {
      background-color: transparent;
      color: ${cores.branca};
      padding: 20px 0;
      font-size: 32px;
      text-align: start;
      font-weight: 100;
    }
  }
`
export const Titulo = styled.h2`
  color: ${cores.branca};
  padding: 40px 0;
  font-size: 32px;
`
