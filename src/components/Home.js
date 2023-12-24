import React from "react";
import About from "./about/About";
import styled from "styled-components";
import "./app.scss";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import Link from "./navigation/Link";
import Projects from "./portfolio/Projects";
import { useNavigate } from "react-router-dom";

const Home = () => {
	return (
		<Main>
			<section id="Homepage">
				<div className="child-container">
					<Side>
						<Link />
					</Side>
					<Hero />
				</div>
			</section>
		</Main>
	);
};

export default Home;

const Main = styled.div`
	display: flex;
	flex-direction: column;

	.child-container {
		/* margin: 1rem 1rem 0rem 1rem; */
		/* border: solid 1px green; */
		/* margin: 3rem; */
	}
`;

const Side = styled.div`
	width: 15%;
	max-width: 5rem;
	height: 100vh;
	position: absolute;
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
