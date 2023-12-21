import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectFour = () => {
	return (
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
	);
};

export default ProjectFour;
