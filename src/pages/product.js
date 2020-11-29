import Head from 'next/head';
import { Title, Button, ButtonLink } from 'src/components/';
import { Container, Row, Col } from 'src/styles/grid';

const Product = () => {
  return (
    <>
      <Head>
        <title>Product page</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <Title type="1">Product</Title>
            <ButtonLink type="default" href="/">
              To index
            </ButtonLink>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Product;
