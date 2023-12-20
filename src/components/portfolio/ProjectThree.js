import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectThree = () => {
	return (
		<div id="chatgpt clone">
			<a
				href="https://github.com/iqrasy/echo-bot"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineGithub />
			</a>
			<div>
				<h1>echo-bot</h1>
			</div>
			<p>
				This project showcases the fundamental capabilities of the Microsoft Bot
				Framework by creating a simple and interactive bot. Developed using the
				Bot Framework, this bot serves as an illustrative example of how to
				design and implement a bot that accepts user input and responds by
				echoing the input back to the user.
			</p>
		</div>
	);
};

export default ProjectThree;
