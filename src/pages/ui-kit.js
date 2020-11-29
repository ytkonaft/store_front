import Head from 'next/head';
import { Title, Button, Link } from 'src/components/';
import { Container, Row, Col } from 'src/styles/grid';

const UiKit = () => {
  return (
    <>
      <Head>
        <title>Ui kit</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <Title type="1">Ui kit </Title>
            <Title type="4">
              <Link href="/">Home</Link>
            </Title>
          </Col>
          <Col lg="12">
            <Title type="2">Title with margin</Title>

            <Title type="1">H1 Lorem ipsum dolor sit amet rerum.</Title>
            <Title type="2">H2 Lorem ipsum dolor sit amet rerum.</Title>
            <Title type="3">H3 Lorem ipsum dolor sit amet rerum.</Title>
            <Title type="4">H4 Lorem ipsum dolor sit amet rerum.</Title>
            <Title type="5">H5 Lorem ipsum dolor sit amet rerum.</Title>
            <Title type="6">H6 Lorem ipsum dolor sit amet rerum.</Title>
          </Col>
          <Col lg="12">
            <Title type="2">Title without margin</Title>
            <Title noMargin type="1">
              H1 Lorem ipsum dolor sit amet rerum.
            </Title>
            <Title noMargin type="2">
              H2 Lorem ipsum dolor sit amet rerum.
            </Title>
            <Title noMargin type="3">
              H3 Lorem ipsum dolor sit amet rerum.
            </Title>
            <Title noMargin type="4">
              H4 Lorem ipsum dolor sit amet rerum.
            </Title>
            <Title noMargin type="5">
              H5 Lorem ipsum dolor sit amet rerum.
            </Title>
            <Title noMargin type="6">
              H6 Lorem ipsum dolor sit amet rerum.
            </Title>
          </Col>

          <Col>
            <Title type="2">Button </Title>
            <Button type="default">Default</Button>
            <Button type="secondary">Secondary</Button>
            <Button type="danger">Danger</Button>
            <Button type="success">Success</Button>
            <Button type="disabled">Disabled</Button>
            <Button>Any</Button>
          </Col>
          <Col>
            <Title type="2">Link </Title>
            <Link href="/">Link</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiKit;
