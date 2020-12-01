import Document, { Head, Main, NextScript, Html } from 'next/document';
import Fonts from 'src/styles/fonts';

// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Retrieve styles from components in the page
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    //  Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <Fonts googleFonts={[{ family: 'Roboto', weights: [400, 700, 900] }]} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
