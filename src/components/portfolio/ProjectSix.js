import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import orbit from "./asset/orbit.png";

const ProjectSix = () => {
	return (
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
	);
};

export default ProjectSix;
