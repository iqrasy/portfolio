import React from "react";
import SidePart from "./navigation/SidePart";
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

const Home = () => {
	return (
		<Main>
			<Div>
				<section id="Homepage">
					<SidePart />
					<Hero />
				</section>
				<section id="About Me">
					<About />
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
				<section id="Services">
					<Services />
				</section>
				<section id="Contact">
					<Contact />
				</section>
				<Footer />
			</Div>
		</Main>
	);
};

export default Home;

const Main = styled.div`
	display: flex;
	flex-direction: column;
`;

const Div = styled.div``;
