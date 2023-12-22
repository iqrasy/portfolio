import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectFour = () => {
	return (
		<Div>
			<div id="portfolio">
				<div className="main-container">
					<h1 className="head">PORTFOLIO</h1>
					{/* <img className="image-one" src={summary} />*/}
					<p className="description">
						This is my personal portfolio, built with React.js and designed to
						showcase my work and skills!
						<a
							href="https://github.com/iqrasy/portfolio"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiOutlineGithub />
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
