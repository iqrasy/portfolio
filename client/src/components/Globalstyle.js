import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

::-webkit-scrollbar {
  width: 0.3rem;

}
::-webkit-scrollbar-track {
  background: #0d1b2a;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #b8b8ff;
  border-radius: 0.1rem;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #7371fc;
}

  body {
    margin: 0;
    padding: 2rem;
    color: #e0e1dd;
    background-color: #0d1b2a;
    overflow-y: auto;
    height: 100vh;
    width: 100vh;
    /* font-family: 'IBM Plex Sans', sans-serif; */
    font-family: 'Nanum Gothic Coding', monospace;
  }

  span{
    color: #bdb2ff;
    font-family: 'VT323', monospace;
  }
`;

export default GlobalStyles;
