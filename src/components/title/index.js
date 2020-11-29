import styled, { css } from 'styled-components';

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
  ${({ noMargin }) => (noMargin ? noMarginStyles : marginStyles)}
`;

const Title = ({ type, children, ...rest }) => (
  <StyledTitle {...rest} as={`h${type}`} type={type}>
    {children}
  </StyledTitle>
);

Title.defaultProps = {
  level: 1,
};

export default Title;
