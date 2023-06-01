import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Links from "./Links";

const Sidebar = () => {
  return (
    <div>
      <Container>
        <Div>
          <Links />
        </Div>
      </Container>
    </div>
  );
};

export default Sidebar;

const Div = styled.div`
  /* border: solid pink 1px; */
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

  @media only screen and (max-width: 600px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 12%;
    width: 5rem;

    a {
      color: #bdb2ff;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`;
