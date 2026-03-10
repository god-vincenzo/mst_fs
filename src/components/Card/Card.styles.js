import styled from 'styled-components';

const variants = {
  default: {
    bg: '#fff',
    border: '1px solid #e2e8f0',
    shadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  elevated: {
    bg: '#fff',
    border: 'none',
    shadow: '0 4px 12px rgba(0,0,0,0.15)',
  },
  filled: {
    bg: '#f8fafc',
    border: 'none',
    shadow: 'none',
  },
};

const paddings = {
  sm: '12px',
  md: '20px',
  lg: '28px',
};

export const StyledCard = styled.div`
  background: ${({ variant }) => variants[variant || 'default'].bg};
  border: ${({ variant }) => variants[variant || 'default'].border};
  box-shadow: ${({ variant }) => variants[variant || 'default'].shadow};
  border-radius: 12px;
  padding: ${({ padding }) => paddings[padding || 'md']};
`;

export const CardTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
`;

export const CardContent = styled.div`
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
`;
