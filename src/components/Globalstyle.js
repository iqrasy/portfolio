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

.c {
   
}

body {
    margin: 0 auto;
    overflow-y: auto;
    height: 100vh;
    z-index: 10;
    background-image: url(${background}); 
    /* background-color:hsla(31,32%,87%,1);
background-image:
radial-gradient(at 8% 90%, hsla(5,100%,69%,1) 0px, transparent 50%),
radial-gradient(at 47% 94%, hsla(270,0%,90%,1) 0px, transparent 50%),
radial-gradient(at 52% 48%, hsla(349,100%,87%,1) 0px, transparent 50%),
radial-gradient(at 89% 7%, hsla(5,100%,69%,1) 0px, transparent 50%),
radial-gradient(at 3% 49%, hsla(240,66%,94%,1) 0px, transparent 50%),
radial-gradient(at 20% 22%, hsla(17,5%,90%,1) 0px, transparent 50%),
radial-gradient(at 76% 68%, hsla(240,66%,94%,1) 0px, transparent 50%); */
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
