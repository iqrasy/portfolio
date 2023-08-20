import React, { useRef, useEffect } from "react";
import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import FadeIn from "./FadeIn";
import styled from "styled-components";
import circleAnimation from "./circle.json";
import Lottie from "lottie-react";
import Sidebar from "./Sidebar";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hey, <span>Iqra</span> here"],
      typeSpeed: 50,
      parseHtml: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Div>
      <Title>
        <div>
          <h1 ref={el} />
        </div>
        <p>
          I'm a full-stack developer based in Montreal. I find my passion
          and interest in the realms of artificial intelligence, the cosmos, and
          art, which continually inspire me.
        </p>
        <AnimationContainer>
          <LottieContainer>
            <Lottie animationData={circleAnimation} loop={true} />
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

  @media only screen and (max-width: 480px) {
    margin-top: 13rem;
    /* border: solid pink 1px; */
    height: 30vh;

    h1 {
      font-size: 2rem;
    }

    span {
      font-size: 2.3rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5;
      width: 90%;
      max-width: 30rem;
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
  @media only screen and (max-width: 480px) {
    position: relative;
    top: 5rem;
    left: 12rem;
    height: 13rem;
    width: 13rem;
    margin-top: 2rem;
  }
`;
