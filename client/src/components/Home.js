import React from "react";
import Tree from "./Tree";
import About from "./About";
import Main from "./Art";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <h1>
        Hi, <span>Iqra </span> here
      </h1>
      <p>
        I'm a full-stack web developer based in Montreal, where I find
        inspiration in the captivating realms of artificial intelligence, the
        cosmos, coding, and art.
      </p>
      <div>
        <Tree />
      </div>
      <About />
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
