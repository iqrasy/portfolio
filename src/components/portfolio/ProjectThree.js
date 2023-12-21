import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import chat from "./asset/chat.png";
import first from "./asset/First.png";

const ProjectThree = () => {
	return (
		<div id="chatgpt clone">
			<div className="main-container">
				<div className="main-header">
					<h1 className="head">CHAT-GPT CLONE</h1>
					<p className="description">
						This project is a ChatGPT clone developed using the OpenAI API,
						specifically utilizing the 'gpt-3.5-turbo' model. It is implemented
						as a single-page React application, featuring user authentication
						and signup functionality powered by Auth0. Auth0 also provides
						conversation tracking capabilities, enabling seamless management of
						user interactions and chat history.
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
	);
};

export default ProjectThree;
