import React from "react";
import About from "./About";
import Projects from "./portfolio/Projects";
import Contact from "./Contact";
import styled from "styled-components";
import "./app.scss";
import Hero from "./Hero";
import Link from "./Link";

const Home = () => {
	return (
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
			<section id="Contact">
				<Contact />
			</section>
		</Main>
	);
};

export default Home;

const Main = styled.div`
	display: flex;
	flex-direction: column;
`;

const Side = styled.div`
	width: 15%;
	max-width: 5rem;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-end;
	opacity: 0.7;
	font-family: "Stardom", sans-serif;
	text-transform: uppercase;
	background: rgba(255, 255, 255, 0.05);
	backdrop-filter: blur(12.5px);
	-webkit-backdrop-filter: blur(12.5px);
`;

// const Side = styled.div`
// 	width: 15%;
// 	max-width: 5rem;
// 	height: 100vh;
// 	position: fixed;
// 	top: 0;
// 	right: 0;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	align-items: flex-end;
// 	opacity: 0.7;
// 	font-family: "Stardom", sans-serif;
// 	text-transform: uppercase;
// 	background: rgba(255, 255, 255, 0.05);
// 	backdrop-filter: blur(12.5px);
// 	-webkit-backdrop-filter: blur(12.5px);
// `;
