import React from "react";
import About from "./about/About";
import Footer from "./Footer";
import styled from "styled-components";
import "./app.scss";
import Hero from "./hero/Hero";
import ProjectOne from "./portfolio/ProjectOne";
import ProjectTwo from "./portfolio/ProjectTwo";
import ProjectThree from "./portfolio/ProjectThree";
import ProjectFour from "./portfolio/ProjectFour";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Link from "./navigation/Link";
import Projects from "./portfolio/Projects";
import ProjectFive from "./portfolio/ProjectFive";
import ProjectSix from "./portfolio/ProjectSix";

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
				<section id="Portfolio">
					<ProjectOne />
				</section>
				<section id="Portfolio">
					<ProjectTwo />
				</section>
				<section id="Portfolio">
					<ProjectThree />
				</section>
				<section id="Portfolio">
					<ProjectFour />
				</section>
				<section id="Portfolio">
					<ProjectFive />
				</section>{" "}
				<section id="Portfolio">
					<ProjectSix />
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

const Div = styled.div``;

const Side = styled.div`
	position: fixed;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	opacity: 0.7;
	/* height: 17vh; */
	width: 10%;
	/* background-size: contain;
	background-position: top; */
	/* background-color: hsla(30, 31%, 87%, 1);
	background-image: radial-gradient(
			at 0% 0%,
			hsla(5, 100%, 69%, 1) 0px,
			transparent 50%
		),
		radial-gradient(at 40% 20%, hsla(28, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 42% 44%, hsla(349, 100%, 87%, 1) 0px, transparent 50%),
		radial-gradient(at 81% 75%, hsla(5, 100%, 69%, 1) 0px, transparent 50%),
		radial-gradient(at 90% 10%, hsla(240, 66%, 94%, 1) 0px, transparent 50%),
		radial-gradient(at 0% 100%, hsla(22, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 80% 100%, hsla(240, 66%, 94%, 1) 0px, transparent 50%); */
`;
