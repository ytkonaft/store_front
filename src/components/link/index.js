import styled, { css } from 'styled-components';
import Link from 'next/link';

const StyledLink = styled.a`
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.colors.main};
  &:after {
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.main};
    content: '';
    transition: all 0.3s ease;
  }
  &:hover {
    &:after {
      width: 0%;
    }
  }
`;

const LinkComponent = ({ href, children, ...rest }) => (
  <Link prefetch href={href} passHref>
    <StyledLink {...rest}>{children}</StyledLink>
  </Link>
);

export default LinkComponent;
