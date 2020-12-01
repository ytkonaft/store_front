import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    font-size: 12px;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    font-size: 1.5rem;
    background-color: #eaeaea;
    line-height: 1;
    font-family: Roboto, sans-serif;

    #__next {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
  }

  [type="search"] {
    appearance: initial;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 0;
  }
`;

export default GlobalStyles;
