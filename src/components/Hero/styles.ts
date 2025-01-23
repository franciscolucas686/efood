import styled from 'styled-components'
import { cores } from '../../style'
import { TagContainer } from '../Tag/styles'
import imageMassa from '../../assets/images/massa.png'

export const Banner = styled.div`
  position: relative;
  display: block;
  height: 280px;
  width: 100%;
  background-image: url(${imageMassa}); /* Define a imagem de fundo */
  background-size: cover; /* Faz a imagem cobrir todo o espaço */
  background-position: center; /* Centraliza a imagem */

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
    z-index: 2;
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
