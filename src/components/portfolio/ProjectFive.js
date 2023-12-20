import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectFive = () => {
	return (
		<div id="metropole">
			<a
				href="https://github.com/iqrasy/orbit"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineGithub />
			</a>
			<div>
				<h1>orbit</h1>
			</div>
			<p>
				ORBIT is a project that aims to recreate the solar system using
				Three.js, providing an interactive and visually appealing representation
				of celestial bodies in our solar system.
			</p>
		</div>
	);
};

export default ProjectFive;
