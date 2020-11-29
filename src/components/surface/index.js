import styled from 'styled-components';

const StyledSurface = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;
  flex-direction: ${({ direction }) => direction || 'row'};
  display: flex;
  margin-bottom: 15px;
`;

const Surface = ({ children, ...rest }) => <StyledSurface {...rest}>{children}</StyledSurface>;

export default Surface;
