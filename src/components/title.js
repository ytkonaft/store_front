import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: var(--heading-font-family);
  font-style: normal;
  color: var(--color-black);
`;

const Title = ({ type, children, ...rest }) => (
  <StyledTitle {...rest} as={`h${type}`}>
    {children}
  </StyledTitle>
);

Title.defaultProps = {
  level: 1,
};

export default Title;
