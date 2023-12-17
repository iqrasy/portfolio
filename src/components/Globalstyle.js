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
    /* margin: 0 auto; */
    /* padding: 5em 0; */
    overflow-y: auto;
    height: 100vh;
    /* width: 70%; */
    z-index: 10;
    background-image: url(${background}); 
    font-family: 'Lato', sans-serif;
  }



  span {
    font-weight: bold;
    /* color: #bdb2ff; */
    /* font-family: 'VT323', monospace; */
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  h1 {
    /* color: #e0e1dd; */
  }

  p {
    /* color: #adb5bd; */
  }

  footer {
    /* color: #6c757d; */
  }

  @media only screen and (max-width: 480px) {

    body {
      /* margin: 0 auto; */
      /* padding: 3em 0; */
      /* color: #e0e1dd; */
      /* background-color: #0d1b2a; */
      /* overflow-y: auto; */
      /* height: auto; */
      /* width: 90%; */
  
    }

  p {
    /* color: #adb5bd; */
  }
  }
`;

export default GlobalStyles;
