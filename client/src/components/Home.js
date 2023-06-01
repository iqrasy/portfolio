import React from "react";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import FadeIn from "./FadeIn";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import styled from "styled-components";
import circleAnimation from "./circle.json";
import Lottie from "react-lottie";
import Sidebar from "./Sidebar";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Div>
      <Title>
        <Typist avgTypingDelay={50}>
          <h1>
            Hey, <span>Iqra </span> here
          </h1>
        </Typist>
        <p>
          I'm a full-stack web developer based in Montreal. I find my passion
          and interest in the realms of artificial intelligence, the cosmos, and
          art, which continually inspire me.
        </p>
        <AnimationContainer>
          <LottieContainer>
            <Lottie options={defaultOptions} />
          </LottieContainer>
        </AnimationContainer>
      </Title>
      <Sidebar />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <Footer />
      </FadeIn>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
`;

const Title = styled.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  width: 99%;
  margin-top: 12rem;
  z-index: 2;
  /* border: solid pink 1px; */

  h1 {
    font-size: 3.5rem;
    display: inline;
  }

  span {
    font-size: 4.5rem;
  }

  p {
    font-size: 1.5rem;
    padding: 1rem 0;
    line-height: 1.5;
    width: 30rem;
  }

  @media only screen and (max-width: 600px) {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: left !important;
    width: 99%;
    height: 50vh;
    z-index: 2;

    h1 {
      font-size: 1.5rem;
    }

    span {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      width: 12rem;
    }
  }
`;

const AnimationContainer = styled.div`
  position: relative;
  bottom: 15rem;
  right: 10rem;
  height: 400px;
  width: 400px;
  z-index: 1;
`;

const LottieContainer = styled.div`
  @media only screen and (max-width: 600px) {
    position: relative;
    top: 2rem;
    left: 13rem;
    height: 200px;
    width: 200px;
    margin-top: 2rem;
  }
`;
