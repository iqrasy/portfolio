import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectOne = () => {
	return (
		<div id="calendar">
			<a
				href="https://github.com/iqrasy/ChatGPT-clone"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineGithub />
			</a>
			<div>
				<h1>ChatGPT Clone</h1>
			</div>
			<p>
				This project is a ChatGPT clone developed using the OpenAI API,
				specifically utilizing the 'gpt-3.5-turbo' model. It is implemented as a
				single-page React application, featuring user authentication and signup
				functionality powered by Auth0. Auth0 also provides conversation
				tracking capabilities, enabling seamless management of user interactions
				and chat history.
			</p>
		</div>
	);
};

export default ProjectOne;
