import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectFour = () => {
	return (
		<div id="portfolio">
			<a
				href="https://github.com/iqrasy/snake-game"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineGithub />
			</a>
			<div>
				<h1>snake-game</h1>
			</div>
			<p>
				I successfully developed a classic snake game using Python, leveraging
				the power of Object-Oriented Programming (OOP) for efficient and
				organized code. The game features a player-controlled snake that moves
				around the screen. As the snake consumes food, it grows longer, and the
				objective is to eat as much food as possible without colliding with the
				boundaries of the game or its own tail.
			</p>
		</div>
	);
};

export default ProjectFour;
