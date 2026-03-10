import styled from 'styled-components';

const variants = {
  primary: {
    bg: '#2563eb',
    color: '#fff',
    border: 'none',
  },
  secondary: {
    bg: '#64748b',
    color: '#fff',
    border: 'none',
  },
  outline: {
    bg: 'transparent',
    color: '#2563eb',
    border: '2px solid #2563eb',
  },
  danger: {
    bg: '#dc2626',
    color: '#fff',
    border: 'none',
  },
};

const sizes = {
  sm: { padding: '6px 12px', fontSize: '14px' },
  md: { padding: '10px 20px', fontSize: '16px' },
  lg: { padding: '14px 28px', fontSize: '18px' },
};

export const StyledButton = styled.button`
  padding: ${({ size }) => sizes[size || 'md'].padding};
  font-size: ${({ size }) => sizes[size || 'md'].fontSize};
  background: ${({ variant }) => variants[variant || 'primary'].bg};
  color: ${({ variant }) => variants[variant || 'primary'].color};
  border: ${({ variant }) => variants[variant || 'primary'].border};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: opacity 0.2s, transform 0.1s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
