import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Global Styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: #7c52a0;
    text-decoration: none;
  }

  a:hover {
    color: #9d6bc6;
  }
`;

export default GlobalStyles;
