import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
	return (
		<>
			<Head>projects</Head>
			<Container>
				<Project>
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
						specifically utilizing the 'gpt-3.5-turbo' model. It is implemented
						as a single-page React application, featuring user authentication
						and signup functionality powered by Auth0. Auth0 also provides
						conversation tracking capabilities, enabling seamless management of
						user interactions and chat history.
					</p>
				</Project>
				<Project>
					<a
						href="https://github.com/iqrasy/AI-article-summarizer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiOutlineGithub />
					</a>
					<div>
						<h1>AI-article-summarizer</h1>
					</div>
					<p>
						I've developed a powerful SaaS article summarizer powered by
						ChatGPT-4. The frontend, built with React and Redux, offers a
						seamless user experience. With a strong focus on SEO, this
						application ensures that content is not only summarized efficiently
						but also optimized for search engine visibility.
					</p>
				</Project>
				<Project>
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
						This project showcases the fundamental capabilities of the Microsoft
						Bot Framework by creating a simple and interactive bot. Developed
						using the Bot Framework, this bot serves as an illustrative example
						of how to design and implement a bot that accepts user input and
						responds by echoing the input back to the user.
					</p>
				</Project>
				{/* <Project>
					<a
						href="https://github.com/iqrasy/project-twitter-clone"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiOutlineGithub />
					</a>
					<div>
						<h1>twitter</h1>
					</div>
					<p>
						Developed a Twitter clone that enables users to create and share
						tweets, explore and interact with other users' tweets, engage with
						likes, and browse user profiles.
					</p>
				</Project> */}
				{/* <Project>
					<a
						href="https://github.com/iqrasy/Final-Project-Metropole"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiOutlineGithub />
					</a>
					<div>
						<h1>metropole</h1>
					</div>
					<p>
						Métropole is a traveler's guide to Montreal, offering the
						convenience of booking restaurants, hotels, and activities all in
						one place.
					</p>
				</Project> */}
				<Project>
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
						I successfully developed a classic snake game using Python,
						leveraging the power of Object-Oriented Programming (OOP) for
						efficient and organized code. The game features a player-controlled
						snake that moves around the screen. As the snake consumes food, it
						grows longer, and the objective is to eat as much food as possible
						without colliding with the boundaries of the game or its own tail.
					</p>
				</Project>
				<Project>
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
						Three.js, providing an interactive and visually appealing
						representation of celestial bodies in our solar system.
					</p>
				</Project>
			</Container>
		</>
	);
};

export default Projects;

const Head = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3.5rem;

	@media only screen and (max-width: 480px) {
		margin-top: 5rem;
		font-size: 2rem;
	}
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	padding: 2rem;

	@media only screen and (max-width: 480px) {
		display: block;
		padding-left: 0;
		margin: 0;
		justify-content: center;
	}
`;

const Project = styled.div`
	background-color: #14213d;
	margin: 1rem;
	width: 70%;
	border-radius: 0.7rem;
	padding: 3rem;
	margin-bottom: 2rem;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
		width: 18vh;
	}

	p {
		line-height: 1.5;
	}

	a {
		color: #bdb2ff;
		font-size: 1.5rem;
		text-decoration: none;
		transition: color 0.3s ease;

		&:hover {
			color: #0056b3;
		}
	}

	@media only screen and (max-width: 480px) {
		height: 28vh;
		width: 35vh;
		margin: 1rem;
		padding: 1rem;
		align-items: center;

		h1 {
			font-size: 1.5rem;
		}

		p {
			font-size: 1rem;
			overflow-y: auto;
			max-height: 6rem;
			width: 34vh;
		}

		a {
			font-size: 1.5rem;
			margin-right: 2rem;
		}
	}
`;
