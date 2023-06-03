import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;

}

.fade-in-section {
  opacity: 0;
  transform: translateY(10vh);
  visibility: hidden;
  transition: opacity 0.6s ease-out, transform 1s ease-out;
  will-change: opacity, visibility;
}
.fade-in-section.is-visible {
  opacity: 1;
  transform: none;
  visibility: visible;
}

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
    margin: 0 auto;
    padding: 5em 0;
    background-color: #0d1b2a;
    overflow-y: auto;
    height: 100vh;
    width: 70%;
    font-family: 'Nanum Gothic Coding', monospace;
  }

  span {
    color: #bdb2ff;
    font-family: 'VT323', monospace;
  }

  a {
    cursor: pointer;
  }

  h1 {
    color: #e0e1dd;
  }

  p {
    color: #adb5bd;
  }

  footer {
    color: #6c757d;
  }

  @media only screen and (max-width: 480px) {
    html {
  scroll-behavior: smooth;

}

.fade-in-section {
  opacity: 0;
  transform: translateY(10vh);
  visibility: hidden;
  transition: opacity 0.6s ease-out, transform 1s ease-out;
  will-change: opacity, visibility;
}
.fade-in-section.is-visible {
  opacity: 1;
  transform: none;
  visibility: visible;
}

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
      margin: 0 auto;
      padding: 3em 0;
      color: #e0e1dd;
      background-color: #0d1b2a;
      overflow-y: auto;
      height: auto;
      width: 90%;
      font-family: 'Nanum Gothic Coding', monospace;
    }

  p {
    color: #adb5bd;
  }
  }
`;

export default GlobalStyles;
