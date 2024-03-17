import React from "react";
import About from "./About";
import Projects from "./portfolio/Projects";
import Contact from "./Contact";
import styled from "styled-components";
import Hero from "./Hero";

const Home = () => {
	return (
		<Main>
			<section id="Homepage">
				<Hero />
			</section>
			<section id="About">
				<About />
			</section>
			<section id="Portfolio">
				<Projects />
			</section>
			<section id="Contact">
				<Contact />
			</section>
		</Main>
	);
};

export default Home;

const Main = styled.div`
	background-color: hsla(30, 11%, 3%, 1);
	background-image: radial-gradient(
			at 98% 22%,
			hsla(0, 0%, 16%, 0.57) 0px,
			transparent 50%
		),
		radial-gradient(at 6% 71%, hsla(0, 0%, 16%, 0.6) 0px, transparent 50%);
	color: var(--text-100);
`;
