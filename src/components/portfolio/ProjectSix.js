import React from "react";
import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";
import orbit from "./asset/orbit.png";

const ProjectSix = () => {
	return (
		<Div>
			<div id="orbit">
				<div className="main-container">
					<h1 className="head">
						ORBIT
						<p className="description">
							ORBIT is a project that aims to recreate the solar system using
							Three.js, a JavaScript library for 3D graphics. An immersive and
							visually stunning recreation of the solar system. As you explore,
							you'll be surrounded by a boundless ocean backdrop, accentuated by
							ethereal clouds that stretch endlessly. Prepare to embark on a
							captivating journey through space. It provides an interactive and
							visually appealing representation of the celestial bodies in our
							solar system.
						</p>
					</h1>
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
							href="https://github.com/iqrasy/orbit"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowOutward />
						</a>
					</div>
					<div className="image-container">
						<img className="image-one" src={orbit} />
					</div>
				</div>
			</div>
		</Div>
	);
};

export default ProjectSix;

const Div = styled.div`
	height: 100vh;
`;
