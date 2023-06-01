import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Links from "./Links";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col>
            <h3>Built and Designed by Iqra Imran Syed</h3>
          </Col>
          <Col>
            <h3>Copyright © {year} </h3>
          </Col>
          <Links />
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 1rem;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 0.7rem;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  a {
    font-size: 1.2rem;
    color: #6c757d;
  }

  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 85%;
    text-align: center;
    font-size: 0.6rem;

    a {
      font-size: 1rem;
    }

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
    }
  }
`;
