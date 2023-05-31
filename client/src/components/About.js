import React from "react";
import styled from "styled-components";
import Tree from "./Tree";

const About = () => {
  return (
    <Div>
      <AboutMe>
        <h1>about me</h1>
        <AboutContent>
          <p>
            When I'm not coding, you can find me exploring new art techniques,
            sketching, or experimenting with digital art. I find inspiration in
            blending technology and creativity to bring unique experiences to
            life.
          </p>
          <TreeWrapper>
            <Tree />
          </TreeWrapper>
        </AboutContent>
      </AboutMe>
      <Tech>
        <div>
          <p>Among the technologies I am familiar with and have used are:</p>
          <span>
            <ul>
              <li>❐ JavaScript ES6+</li>
              <li>❐ React.JS</li>
              <li>❐ MongoDB</li>
              <li>❐ C</li>
              <li>❐ Three.js</li>
              <li>❐ Node.JS</li>
              <li>❐ Express.JS</li>
              <li>❐ Bootstrap</li>
            </ul>
          </span>
        </div>
      </Tech>
    </Div>
  );
};

export default About;

const Div = styled.div`
  /* border: solid red 1px; */
`;

const Tech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 0 2rem;
  width: 85%;
  height: 27vh;
  margin-top: 10rem;
  z-index: 2;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  ul {
    width: 18rem;
    padding-left: 5rem;
    margin-top: 5rem;
    list-style-type: none;
    display: grid;
    align-items: right;
    justify-content: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-gap: 0.1rem;
  }

  p {
    font-size: 1.5rem;
    padding-top: 1rem;
    line-height: 1.5;
    width: 15rem;
  }

  @media only screen and (max-width: 600px) {
    align-items: center;
    height: 35vh;
    width: 70%;
    padding: 0 2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      grid-gap: 0.1rem;
    }

    ul {
      width: 17rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      width: 12rem;
    }
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 27vh;
  padding: 2rem 0 0 2rem;
  z-index: 2;

  h1 {
    font-size: 3.5rem;
    display: inline;
  }

  p {
    font-size: 1.5rem;
    padding: 0;
    line-height: 1.5;
    width: 15rem;
  }

  @media only screen and (max-width: 600px) {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: left;
    width: 75%;
    height: 20vh;
    z-index: 2;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      width: 12rem;
    }
  }
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
`;

const TreeWrapper = styled.div`
  margin-left: 2rem;
  margin-bottom: 2rem;
  margin-top: auto !important;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;
