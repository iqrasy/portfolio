import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Links from "./Links";

const Sidebar = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Iqra Imran Syed.pdf";
    link.download = "Iqra Imran Syed.pdf";
    link.click();
  }

  return (
    <div>
      <Container>
        <Div>
          <Links />
        </Div>
      </Container>
          <Button onClick={handleDownload}>
          Download Resume
        </Button>
    </div>
  );
};

export default Sidebar;

const Div = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 12%;
  width: 5rem;

  a {
    color: #bdb2ff;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 480px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 12%;
    width: 5rem;
    z-index: 10;

    a {
      color: #bdb2ff;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }
`;

const Button = styled.button`
  font-family: 'Nanum Gothic Coding', monospace;
  background-color: transparent;
  border: solid 1px #bdb2ff;
  border-radius: 0.5rem;
  margin: 1rem;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 7%;
  width: 10rem;
  font-size: 1rem;
  cursor: pointer;
  color: #adb5bd;
  transition: background-color 0.5s ease-in; 

&:hover {
  background-color: #ff7f50; 
  border: none;
  background-color: #bdb2ff;
  color: black;
}

@media only screen and (max-width: 480px){
  display: none;
}
`