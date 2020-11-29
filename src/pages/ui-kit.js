import Head from 'next/head';
import { Title, Button, Link, Text, Surface } from 'src/components/';
import { Container, Row, Col } from 'src/styles/grid';

const RenderCols = (count) => {
  const colArr = new Array(count).fill(null);
  const width = 24 / count;

  return (
    <Row>
      {colArr.map(() => (
        <Col sm={width}>
          <Surface>
            <small>{width}</small>
          </Surface>
        </Col>
      ))}
    </Row>
  );
};

const UiKit = () => {
  return (
    <>
      <Head>
        <title>Ui kit</title>
      </Head>
      <Container>
        <Row>
          <Col>
            <Text>
              <Link href="/">Home</Link>
            </Text>
            <Title type="1" bordered>
              Ui kit
            </Title>
          </Col>

          <Col>
            <Title type="2" bordered>
              Grid
            </Title>
            {RenderCols(1)}
            {RenderCols(2)}
            {RenderCols(3)}
            {RenderCols(6)}
            {RenderCols(12)}
            {RenderCols(24)}
          </Col>

          <Col>
            <Title type="2" bordered>
              Button
            </Title>

            <Surface>
              <Button type="primary">Default</Button>
              <Button type="secondary">Secondary</Button>
              <Button type="danger">Danger</Button>
              <Button type="success">Success</Button>
              <Button type="disabled">Disabled</Button>
              <Button>Any</Button>
            </Surface>
          </Col>
          <Col>
            <Title type="2" bordered>
              Link
            </Title>
            <Surface>
              <Link href="/">Link</Link>
            </Surface>
          </Col>

          <Col lg="12">
            <Title type="2" bordered>
              Title with margin
            </Title>

            <Surface direction="column">
              <Title type="1">H1 Lorem ipsum dolor sit amet rerum.</Title>
              <Title type="2">H2 Lorem ipsum dolor sit amet rerum.</Title>
              <Title type="3">H3 Lorem ipsum dolor sit amet rerum.</Title>
              <Title type="4">H4 Lorem ipsum dolor sit amet rerum.</Title>
              <Title type="5">H5 Lorem ipsum dolor sit amet rerum.</Title>
              <Title type="6">H6 Lorem ipsum dolor sit amet rerum.</Title>
            </Surface>
          </Col>
          <Col lg="12">
            <Title type="2" bordered>
              Title without margin
            </Title>
            <Surface direction="column">
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
            </Surface>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UiKit;
