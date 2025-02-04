import { TagContainer } from './styles'

export type Props = {
  children?: string
  className?: string
}

const Tag = ({ children, className }: Props) => (
  <TagContainer className={className}>{children}</TagContainer>
)

export default Tag
