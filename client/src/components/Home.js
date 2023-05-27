import React from "react";
import Tree from "./Tree";
import About from "./About";

const Home = () => {
  return (
    <div>
      <h1>
        Hi, <span>Iqra </span> here
      </h1>
      <p>
        I'm a passionate full-stack web developer based in Montreal weaving
        together the realms of artificial intelligence, space, coding, and art.
      </p>
      {<Tree></Tree>}
      <About />
    </div>
  );
};

export default Home;
