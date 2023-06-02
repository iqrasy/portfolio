import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <Head>projects</Head>
      <Container>
        <Project>
          <Wrapper>
            <h1>orbit</h1>
            <Link
              href="https://github.com/iqrasy/orbit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </Link>
          </Wrapper>
          <Description>
            ORBIT is a project that aims to recreate the solar system using
            Three.js. It provides an interactive and visually appealing
            representation of the celestial bodies in our solar system.
          </Description>
        </Project>
        <Project>
          <Wrapper>
            <h1>metropole</h1>
            <Link
              href="https://github.com/iqrasy/Final-Project-Metropole"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </Link>
          </Wrapper>
          <Description>
            Métropole is a travellers guide to Montreal. It allows you to book
            restaurants, hotels, and activities all in one place.
          </Description>
        </Project>
        <Project>
          <Wrapper>
            <h1>twitter</h1>
            <Link
              href="https://github.com/iqrasy/project-twitter-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub />
            </Link>
          </Wrapper>
          <Description>
            Created a twitter clone which allows you to post tweets, view
            tweets, like tweets, and view profiles.
          </Description>
        </Project>
      </Container>
    </>
  );
};

export default Projects;

const Head = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  line-height: 1.5;

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
    overflow-y: auto;
    max-height: 5rem;
    width: 35vh;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media only screen and (max-width: 600px) {
    display: block;
    padding: 0;
    margin: 0;
    justify-content: center;
  }
`;

const Project = styled.div`
  background-color: #14213d;
  margin: 1rem;
  height: 45vh;
  width: 30vh !important;
  border-radius: 0.5rem;
  padding: 2rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 600px) {
    height: 25vh;
    width: 45vh;
    margin: 0 0 1rem 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 30vh;

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Link = styled.a`
  color: #bdb2ff;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.5rem;
    margin-right: 2rem;
  }
`;