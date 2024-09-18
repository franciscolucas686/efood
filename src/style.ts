import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosaEscuro: '#E66767',
  rosaClaro: '#FFEBD9',
  corDeFundo: '#FFF8F2',
  branca: '#fff'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  color: ${cores.rosaEscuro}
  }

  body {
    background-color: ${cores.corDeFundo}
    color: ${cores.rosaEscuro}
  }

  .container {
  max-width: 1024px;
  margin: 0 auto;
  }
`
