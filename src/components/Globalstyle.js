import { createGlobalStyle } from "styled-components";
import background from "../assets/downloadss.jpeg";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;

}

body {
    margin: 0 auto;
    overflow-y: auto;
    height: 100vh;
    z-index: 10;
    background-image: url(${background}); 
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
