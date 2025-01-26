import style from 'styled-components'
import { cores } from '../../style'
import { TagContainer } from '../Tag/styles'
import { Btn } from '../Button/styles'

export const Card = style.div`
  border: 2px solid ${cores.rosaEscuro};
  margin-top: 40px;
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${Btn} {
    margin-top: 16px;
  }
`
export const Titulo = style.h3`
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Descrição = style.p`
  font-size: 14px;
  line-weight: 22px;
  display: block;
  margin-top: 16px;
`
