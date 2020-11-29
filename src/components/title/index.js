import styled, { css } from 'styled-components';

const noBorderStyles = css`
  border: none;
`;

const borderStyles = css`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const noMarginStyles = css`
  margin: 0;
`;

const marginStyles = css`
  margin-top: ${({ type }) => `${30 / type}px`};
  margin-bottom: ${({ type }) => `${60 / type}px`};
`;

const StyledTitle = styled.h1`
  font-family: var(--heading-font-family);
  font-style: normal;
  color: var(--color-black);
  width: 100%;
  display: block;
  ${({ noMargin }) => (noMargin ? noMarginStyles : marginStyles)}
  ${({ bordered }) => (bordered ? borderStyles : noBorderStyles)}
`;

const Title = ({ type, children, ...rest }) => (
  <StyledTitle {...rest} as={`h${type}`} type={type}>
    {children}
  </StyledTitle>
);

export default Title;
