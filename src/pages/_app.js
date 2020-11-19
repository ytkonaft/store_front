import { ThemeProvider } from 'styled-components';
import theme from 'src/styles/theme';
import GlobalStyle from 'src/styles/global-styles';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
