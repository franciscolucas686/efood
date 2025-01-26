import styled from 'styled-components'
import Fundo from '../../assets/images/fundo.png'

export const Imagem = styled.div`
  background-image: url(${Fundo});
  width: 100%;
  height: 360px;
  display: block;
  background-size: cover;
`
export const ImagemRestaurant = styled.div`
  background-image: url(${Fundo});
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
`

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`
export const HeaderContainerRestaurant = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

export const LogoContainer = styled.img`
  z-index: 1;
`

export const Titulo = styled.h1`
  font-size: 36px;
  line-weight: 42px;
  padding-bottom: 40px;
  font-height: 900;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12rem;
  margin-top: 20px;
  align-items: center;
`
