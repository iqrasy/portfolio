import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --custom-highlight-color: #eaded2; 
}

::selection {
  background-color: var(--custom-highlight-color);
  color: #000814; 
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  min-height: 100%;
}

  body {
    background-color: #000814;
    color: #eaded2;
    height: 100vh;
    position: relative;
}


  span {
    font-weight: bold;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyles;
