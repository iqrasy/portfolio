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
  background-color: hsla(31, 56%, 92%, 1);
  background: 
    radial-gradient(at 4% 2%, hsla(23, 9%, 30%, 1) 0px, transparent 50%),
    radial-gradient(at 1% 2%, hsla(33, 5%, 23%, 1) 0px, transparent 50%),
    radial-gradient(at 70% 1%, hsla(36, 15%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 96% 98%, hsla(23, 9%, 30%, 1) 0px, transparent 50%),
    radial-gradient(at 49% 52%, hsla(36, 15%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 99% 98%, hsla(33, 5%, 23%, 1) 0px, transparent 50%),
    radial-gradient(at 28% 99%, hsla(36, 15%, 76%, 1) 0px, transparent 50%);
  background-size: 100% 100%;
  animation: moveDrapes 5s infinite ;
  filter: noise(1) grayscale(1); /* Add noise and adjust grayscale */
}


@keyframes moveDrapes {
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
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
