import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
  return (
    <>
      <Head>projects</Head>
      <Container>
        <Project>
          <a
            href="https://github.com/iqrasy/orbit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <div>
            <h1>orbit</h1>
          </div>
          <p>
            ORBIT is a project that aims to recreate the solar system using
            Three.js, providing an interactive and visually appealing
            representation of celestial bodies in our solar system.
          </p>
        </Project>
        <Project>
          <a
            href="https://github.com/iqrasy/Final-Project-Metropole"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <div>
            <h1>metropole</h1>
          </div>
          <p>
            Métropole is a traveler's guide to Montreal, offering the
            convenience of booking restaurants, hotels, and activities all in
            one place.
          </p>
        </Project>
        <Project>
          <a
            href="https://github.com/iqrasy/project-twitter-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <div>
            <h1>twitter</h1>
          </div>
          <p>
            Developed a Twitter clone that enables users to create and share
            tweets, explore and interact with other users' tweets, engage with
            likes, and browse user profiles.
          </p>
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

  @media only screen and (max-width: 480px) {
    margin-top: 5rem;
    font-size: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media only screen and (max-width: 480px) {
    display: block;
    padding-left: 1.5rem;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
`;

const Project = styled.div`
  background-color: #14213d;
  margin: 1rem;
  height: 45vh;
  width: 25vh;
  border-radius: 0.7rem;
  padding: 3rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 18vh;
  }

  p {
    line-height: 1.5;
  }

  a {
    color: #bdb2ff;
    font-size: 1.5rem;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }

  @media only screen and (max-width: 480px) {
    height: 28vh;
    width: 35vh;
    margin: 1rem;
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
      overflow-y: auto;
      max-height: 6rem;
      width: 32vh;
    }

    a {
      font-size: 1.5rem;
      margin-right: 2rem;
    }
  }
`;
