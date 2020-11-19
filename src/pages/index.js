import Head from 'next/head';
import { Title, Button } from 'src/components/';
import { Container, Row, Col } from 'src/styles/grid';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container>
        <Row>
          <Col lg="12">
            <Title type="1">Lorem ipsum dolor sit amet rerum.</Title>
            <Button type="default">Azazaz</Button>
          </Col>
          <Col lg="12">
            <Title type="2">Lorem ipsum dolor sit amet rerum.</Title>
            <Button type="secondary">Azazaz1</Button>
          </Col>
          <Col md="12">
            <Title type="3">Lorem ipsum dolor sit amet rerum.</Title>
            <Button type="danger">Azazaz2</Button>
          </Col>
          <Col md="12">
            <Title type="4">Lorem ipsum dolor sit amet rerum.</Title>
            <Button type="success">Azazaz2</Button>
          </Col>
          <Col sm="12">
            <Title type="4">Lorem ipsum dolor sit amet rerum.</Title>
            <Button type="disabled">Azazaz2</Button>
          </Col>
          <Col sm="12">
            <Title type="6">Lorem ipsum dolor sit amet rerum.</Title>
            <Button>Azazaz2</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
