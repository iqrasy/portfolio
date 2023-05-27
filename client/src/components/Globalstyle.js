import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif; */
    margin: 0;
    padding: 0;
    color: #e0e1dd;
    background-color: #0d1b2a;
    overflow-y: auto;
    height: 100vh;
    width: 100vh;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  span{
    /* color: #dee2ff; */
    color: #bdb2ff;
  }
`;

export default GlobalStyles;
