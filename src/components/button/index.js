import styled, { css } from 'styled-components';
import Link from 'next/link';

const secondaryStyle = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const disabledStyle = css`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  pointer-events: none;
`;

const initialStyle = css`
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.dark};
`;

const buttonStyles = (type) => css`
  background: ${({ theme }) => theme.colors[type]};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors[type]};

  &:hover {
    background: ${({ theme }) => theme.colors.hover[type]};
    border-color: ${({ theme }) => theme.colors.hover[type]};
  }
`;

const getBackground = (type) => {
  switch (type) {
    case 'primary':
    case 'danger':
    case 'success':
      return buttonStyles(type);
    case 'secondary':
      return secondaryStyle;
    case 'disabled':
      return disabledStyle;
    default:
      return initialStyle;
  }
};

const ButtonStyle = css`
  border: none;
  padding: 10px 15px 8px;
  cursor: pointer;
  display: flex;
  border-radius: 2px;
  vertical-align: top;
  align-items: center;
  font-size: ${({ theme: { ms } }) => ms(2)};
  line-height: ${({ theme: { ms } }) => ms(3)};
  transition: all 0.3s ease;
  margin: 0 ${({ theme: { ms } }) => ms(-7)};
  border: 1px solid;
  ${({ type, theme }) => getBackground(type)};

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  i {
    margin-left: ${({ theme: { ms } }) => ms(-2)};
  }
`;

export const Button = styled.button`
  ${ButtonStyle}
`;

const StyledLink = styled.a`
  text-decoration: none;
  ${ButtonStyle}
`;

export const ButtonLink = ({ href, children, ...rest }) => (
  <Link href={href} passHref>
    <StyledLink {...rest}>{children}</StyledLink>
  </Link>
);
