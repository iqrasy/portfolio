import React from "react";
import About from "./About";
import Projects from "./portfolio/Projects";
import Contact from "./Contact";
import styled from "styled-components";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Links from "./Links";
import Sphere from "./Sphere";

const Home = () => {
	return (
		<Main>
			{/* <Side>
				<Sidebar />
			</Side> */}
			<Links />
			<section id="Homepage">
				<Hero />
			</section>
			{/* <section className="divider"></section>
			<section id="sphere">
				<Sphere />
			</section> */}
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
	background-color: var(--bg-100);
	color: var(--text-100);

	section {
		height: 100vh;
	}

	/* .divider {
		height: 50vh;
	}

	.sphere {
		position: absolute;
		top: 10rem;
		margin-top: 10rem;
	} */
`;

const Side = styled.div`
	z-index: 20;
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

	@media only screen and (max-width: 480px) {
		display: none;
	}
`;
