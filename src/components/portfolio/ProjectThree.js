import React from "react";
import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";
import chat from "./asset/chat.png";
import first from "./asset/First.png";

const ProjectThree = () => {
	return (
		<Div>
			<div id="chatgpt clone">
				<div className="main-container">
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
							href="https://github.com/iqrasy/ChatGPT-clone"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowOutward />
						</a>
					</div>
					<h1 className="head">
						CHAT-GPT CLONE
						<p className="description">
							This project is a ChatGPT clone developed using the OpenAI API,
							specifically utilizing the 'gpt-3.5-turbo' model. It is
							implemented as a single-page React application, featuring user
							authentication and signup functionality powered by Auth0. Auth0
							also provides conversation tracking capabilities, enabling
							seamless management of user interactions and chat history.
						</p>
					</h1>
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
`;
