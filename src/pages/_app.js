import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/theme';
import GlobalStyle from 'src/styles/global-styles';
import { Header } from 'src/components/';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
