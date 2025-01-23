import { ButtonLink } from './styles'

export type Props = {
  title: string
  children: string
  onClick?: () => void
  to?: string // Propriedade `to` opcional
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
    <button onClick={onClick} title={title}>
      {children}
    </button>
  )
}

export default Button
