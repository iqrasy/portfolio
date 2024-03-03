import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --custom-highlight-color: #eaded2; 
  --text-100: #eaded2;
  --text-200: #8a817c;
  --bg-100: #0A0908;
  
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
}

body {
  height: 100vh;
  width: 100vw;
}


  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }


`;

export default GlobalStyles;
