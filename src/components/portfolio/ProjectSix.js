import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import orbit from "./asset/orbit.png";

const ProjectSix = () => {
	return (
		<Div>
			<div id="orbit">
				<div className="main-container">
					<div className="main-header">
						<h1 className="head">ORBIT</h1>
						<p className="description">
							ORBIT is a project that aims to recreate the solar system using
							Three.js, a JavaScript library for 3D graphics. An immersive and
							visually stunning recreation of the solar system. As you explore,
							you'll be surrounded by a boundless ocean backdrop, accentuated by
							ethereal clouds that stretch endlessly. Prepare to embark on a
							captivating journey through space. It provides an interactive and
							visually appealing representation of the celestial bodies in our
							solar system.
							<a
								href="https://github.com/iqrasy/orbit"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineGithub />
							</a>
						</p>
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
