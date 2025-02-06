import styled from 'styled-components'
import { cores } from '../../style'

export const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  background: ${cores.rosaEscuro};
  padding: 23px;

  position: relative;
  display: flex;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  cursor: pointer;
  max-width 100%;
  display: block;
  color: ${cores.branca}
`
export const Image = styled.img`
  height: 280px;
  width: 280px;
  margin-right: 20px;
  object-fit: cover;
`

export const Titulo = styled.h2`
  color: ${cores.branca};
  font-size: 18px;
  margin-bottom: 16px;
`

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 18px;
`

export const Porcao = styled.p`
  color: ${cores.branca};
  font-size: 14px;
  margin-bottom: 16px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonBox = styled.div`
  max-width: 300px;
`
