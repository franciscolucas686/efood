import { ButtonLink } from './styles'

export type Props = {
  title: string
  to: string
  children: string
  onClick?: () => void
}

const Button = ({ title, children, to }: Props) => (
  <ButtonLink to={to} title={title}>
    {children}
  </ButtonLink>
)

export default Button
