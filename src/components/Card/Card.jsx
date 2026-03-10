import { StyledCard, CardTitle, CardContent } from './Card.styles';

export function Card({ variant = 'default', padding = 'md', title, children, ...props }) {
  return (
    <StyledCard variant={variant} padding={padding} {...props}>
      {title && <CardTitle>{title}</CardTitle>}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
}
