import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectFour = () => {
	return (
		<Div>
			<div id="portfolio">
				<div className="main-container">
					<div className="main-header">
						<h1 className="head">PORTFOLIO</h1>
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
					{/* <div className="image-container">
					<img className="image-one" src={summary} />
				</div> */}
				</div>
			</div>
		</Div>
	);
};

export default ProjectFour;

const Div = styled.div`
	height: 100vh;
	background-color: hsla(31, 32%, 87%, 1);
	background-image: radial-gradient(
			at 2% 98%,
			hsla(5, 100%, 69%, 1) 0px,
			transparent 50%
		),
		radial-gradient(at 87% 85%, hsla(270, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 50% 51%, hsla(349, 100%, 87%, 1) 0px, transparent 50%),
		radial-gradient(at 98% 2%, hsla(5, 100%, 69%, 1) 0px, transparent 50%),
		radial-gradient(at 3% 49%, hsla(240, 66%, 94%, 1) 0px, transparent 50%),
		radial-gradient(at 4% 3%, hsla(17, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 95% 51%, hsla(240, 66%, 94%, 1) 0px, transparent 50%);
`;
