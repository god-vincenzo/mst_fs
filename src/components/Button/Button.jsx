import { StyledButton } from './Button.styles';

export function Button({ variant = 'primary', size = 'md', children, ...props }) {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {children}
    </StyledButton>
  );
}
