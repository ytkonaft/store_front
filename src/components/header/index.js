import { Title, Button, Link, Text } from 'src/components/';
import { Container, Row, Col } from 'src/styles/grid';

const Header = () => {
  return (
    <header>
      <Container>
        <Row>
          <Col lg="6">SiteName</Col>
          <Col lg="18">
            <ul>
              <li>
                <a>Test</a>
              </li>
              <li>
                <a>Test</a>
              </li>
              <li>
                <a>Test</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
