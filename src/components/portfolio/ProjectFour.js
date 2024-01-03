import React from "react";
import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";
import portfolio from "./asset/portfolio.png";

const ProjectFour = () => {
	return (
		<Div>
			<div id="portfolio">
				<div className="main-container">
					<div className="project-text">
						<svg
							className="circle"
							width="7rem"
							height="8rem"
							viewBox="0 0 100 100"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="50"
								cy="50"
								r="45"
								fill="transparent"
								stroke="#6c757d"
								strokeWidth="1"
							/>
						</svg>
						<a
							className="link"
							href="https://github.com/iqrasy/portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowOutward />
						</a>
					</div>
					<h1 className="head">
						PORTFOLIO
						<p className="description">
							This is my personal portfolio, built with React.js, GSAP
							animations and framer motion and designed to showcase my work and
							skills!
						</p>
					</h1>
					<div className="image-container">
						<img className="image-one" src={portfolio} />
					</div>
				</div>
			</div>
		</Div>
	);
};

export default ProjectFour;

const Div = styled.div`
	height: 100vh;
`;
