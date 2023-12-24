import React from "react";
import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";
import portfolio from "./asset/portfolio.png";

const ProjectFour = () => {
	return (
		<Div>
			<div id="portfolio">
				<div className="main-container">
					<h1 className="head">PORTFOLIO</h1>
					<div className="image-container">
						<img className="image-one" src={portfolio} />
					</div>
					<p className="description">
						This is my personal portfolio, built with React.js, GSAP animations
						and framer motion and designed to showcase my work and skills!
						<a
							href="https://github.com/iqrasy/portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowOutward />
						</a>
					</p>
				</div>
			</div>
		</Div>
	);
};

export default ProjectFour;

const Div = styled.div`
	height: 100vh;
`;
