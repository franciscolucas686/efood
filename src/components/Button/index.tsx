import { ReactNode } from 'react'
import { Btn, ButtonLink } from './styles'

export type Props = {
  title?: string
  children?: ReactNode
  onClick?: () => void
  to?: string
}

const Button = ({ title, children, onClick, to }: Props) => {
  if (to) {
    return (
      <ButtonLink to={to} title={title}>
        {children}
      </ButtonLink>
    )
  }

  return (
    <Btn onClick={onClick} title={title}>
      {children}
    </Btn>
  )
}

export default Button
