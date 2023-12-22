import React from "react";
import About from "./about/About";
import styled from "styled-components";
import "./app.scss";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Link from "./navigation/Link";
import Projects from "./portfolio/Projects";

const Home = () => {
	return (
		<>
			<Main>
				<Side>
					<Link />
				</Side>
				<section id="Homepage">
					<Hero />
				</section>
				<section id="About">
					<About />
				</section>
				<section id="Portfolio">
					<Projects />
				</section>
				<section id="Services">
					<Services />
				</section>
				<section id="Contact">
					<Contact />
				</section>
			</Main>
		</>
	);
};

export default Home;

const Main = styled.div`
	display: flex;
	flex-direction: column;
`;

const Side = styled.div`
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	opacity: 0.7;
	width: 10%;
	/* background: rgba(255, 255, 255, 0.05);
	backdrop-filter: blur(12.5px);
	-webkit-backdrop-filter: blur(12.5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18); */
`;
