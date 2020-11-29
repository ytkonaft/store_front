import styled, { css } from 'styled-components';

const StyledTitle = styled.p`
  font-family: var(--heading-font-family);
  font-style: normal;
  color: var(--color-black);
  margin: 15px 0;
`;

const Text = ({ children, ...rest }) => <StyledTitle {...rest}>{children}</StyledTitle>;

export default Text;
