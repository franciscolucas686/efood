import styled from 'styled-components'
import { ButtonLink } from '../../components/Button/styles'
import { cores } from '../../style'

export const Row = styled.div`
  display: block;
  align-items: flex-end;

  small {
    color: ${cores.rosaClaro};
  }
`

export const InputGroup = styled.div`
  label {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    color: ${cores.rosaClaro};
    display: block;
    margin: 8px 0;
  }

  input,
  select {
    width: 100%;
    max-height: 32px;
    height: 100%;
    padding: 8px;
    border: 1px solid ${cores.rosaEscuro};
    background-color: ${cores.rosaClaro};
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;

    &.error {
      border: 2px solid red; /* Borda preta para campos com erro */
      background: #fae0e4;
    }
  }

  &.InputFlex {
    display: flex;
    justify-content: space-between;

    div {
      width: 155px;
    }

    .Label-margin-top {
      margin-top: 0;
    }
  }
`

export const InputGroupPaymentBlock = styled.div`
  display: block;

  label {
    display: block;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    color: ${cores.rosaClaro};
    margin-bottom: 8px;
  }

  input,
  select {
    width: 100%; /* Ajusta a largura do input ao contêiner */
    height: 32px;
    background-color: ${cores.rosaClaro};
    border: none;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;

    &.error {
      border: 2px solid red; /* Borda preta para campos com erro */
      background: #fae0e4;
    }
  }
`

export const InputGroupPaymentFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 360px;

  .InputNumbCard,
  .InputCvv {
    display: flex;
    flex-direction: column;
    width: 100%; /* Garante que as divs se ajustem ao contêiner pai */
  }

  .InputNumbCard {
    width: 228px;
    margin: 8px 0;

    input,
    select {
      width: 100%;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      line-height: 16.41px;
      text-align: left;

      &.error {
        border: 2px solid red; /* Borda preta para campos com erro */
        background: #fae0e4;
      }
    }
  }

  .InputCvv {
    width: 87px;
    margin: 8px 0;

    input,
    select {
      width: 100%;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      line-height: 16.41px;
      text-align: left;

      &.error {
        border: 2px solid red; /* Borda preta para campos com erro */
        background: #fae0e4;
      }
    }
  }

  label {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16.41px;
    text-align: left;
    color: ${cores.rosaClaro};
    margin-bottom: 8px;
  }

  input,
  select {
    height: 32px;
    background-color: ${cores.rosaClaro};
    border: 1px solid ${cores.rosaEscuro}; /* Borda padrão */

    &.error {
      border: 2px solid red; /* Borda preta para campos com erro */
      background: #fae0e4;
    }
  }

  .InputNumbCard + .InputCvv {
    margin-left: 30px;
  }
`

export const TitleH3 = styled.h3`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  text-align: left;
  color: ${cores.rosaClaro};
  margin-bottom: 16px;
`

export const Paragrafo = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: ${cores.rosaClaro};
`

export const TabButton = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${ButtonLink} {
    max-width: 344px;
    width: 100%;
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; // Certifique-se de que está acima de outros conteúdos
`

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`
