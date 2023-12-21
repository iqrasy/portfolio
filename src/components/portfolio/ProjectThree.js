import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import chat from "./asset/chat.png";
import first from "./asset/First.png";

const ProjectThree = () => {
	return (
		<Div>
			<div id="chatgpt clone">
				<div className="main-container">
					<div className="main-header">
						<h1 className="head">CHAT-GPT CLONE</h1>
						<p className="description">
							This project is a ChatGPT clone developed using the OpenAI API,
							specifically utilizing the 'gpt-3.5-turbo' model. It is
							implemented as a single-page React application, featuring user
							authentication and signup functionality powered by Auth0. Auth0
							also provides conversation tracking capabilities, enabling
							seamless management of user interactions and chat history.
							<a
								href="https://github.com/iqrasy/ChatGPT-clone"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineGithub />
							</a>
						</p>
					</div>
					<div className="image-container">
						<img className="image-one" src={chat} />
						<img className="image-two" src={first} />
					</div>
				</div>
			</div>
		</Div>
	);
};

export default ProjectThree;

const Div = styled.div`
	height: 100vh;
	background-color: hsla(31, 32%, 87%, 1);
	background-image: radial-gradient(
			at 98% 98%,
			hsla(5, 100%, 69%, 1) 0px,
			transparent 50%
		),
		radial-gradient(at 3% 88%, hsla(270, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 50% 51%, hsla(349, 100%, 87%, 1) 0px, transparent 50%),
		radial-gradient(at 1% 2%, hsla(5, 100%, 69%, 1) 0px, transparent 50%),
		radial-gradient(at 3% 49%, hsla(240, 66%, 94%, 1) 0px, transparent 50%),
		radial-gradient(at 99% 2%, hsla(17, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 95% 51%, hsla(240, 66%, 94%, 1) 0px, transparent 50%);
`;
