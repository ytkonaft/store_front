import Head from 'next/head';
import { Title, Link, ButtonLink } from 'src/components/';
import { Container, Row, Col } from 'src/styles/grid';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <Title type="1">Index</Title>
          </Col>
          <Col>
            <Title type="3">Pages</Title>
            <Link href="/product">Product</Link>
            <Link href="/ui-kit">Ui kit</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
