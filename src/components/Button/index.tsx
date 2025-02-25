import { ReactNode } from 'react'
import { Btn, ButtonLink } from './styles'

export type Props = {
  title?: string
  children?: ReactNode
  onClick?: () => void
  to?: string
  className?: string
  disabled?: boolean
}

const Button = ({ title, children, onClick, to, className }: Props) => {
  if (to) {
    return (
      <ButtonLink to={to} title={title} className={className}>
        {children}
      </ButtonLink>
    )
  }

  return (
    <Btn onClick={onClick} title={title} className={className}>
      {children}
    </Btn>
  )
}

export default Button
