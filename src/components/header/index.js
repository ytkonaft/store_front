import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Title, Button, SlideContent } from 'src/components/';
import { Container, Row, Col } from 'src/styles/grid';

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

const Header = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <StyledHeader>
      <Container>
        <Row>
          <Col lg="6" align="center" direction="row">
            <Title type="3" noMargin>
              SiteName
            </Title>
          </Col>
          <Col lg="18" direction="row" align="center" justify="flex-end">
            <Button type="primary" onClick={() => toggleOpen(!isOpen)}>
              Login
            </Button>
            <Button type="secondary">Sign up</Button>
          </Col>
        </Row>

        <SlideContent isVisible={isOpen}>
          <Row>
            <Col lg="12" align="center">
              <Title type="4">
                azazazadsadak djalskdjlakdjl kjasdlk jalksdjlaksjdl kajsdl kjlskdjlk
              </Title>
              azazazadsadak djalskdjlakdjl kjasdlk jalksdjlaksjdl kajsdl kjlskdjlk azazazadsadak
              djalskdjlakdjl kjasdlk jalksdjlaksjdl kajsdl kjlskdjlk azazazadsadak djalskdjlakdjl
              kjasdlk jalksdjlaksjdl kajsdl kjlskdjlk
            </Col>
          </Row>
        </SlideContent>
      </Container>
    </StyledHeader>
  );
};

export default Header;
