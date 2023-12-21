import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import landingPage from "./asset/LandingPage.png";
import mainPage from "./asset/mainPage.png";

const ProjectOne = () => {
	return (
		<Div>
			<div id="calendar">
				<div className="main-container">
					<div className="main-header">
						<h1 className="head">PERSONAL-CALENDAR</h1>
						<p className="description">
							I've developed my own version of a calendar where you can plan out
							your day, week, and year. The Modern Calendar App is a
							feature-rich, user-friendly calendar application designed to
							streamline your scheduling and organization needs. It offers a
							seamless and intuitive experience with a React-based frontend and
							a powerful backend powered by Node.js, Express, and PostgreSQL.
							<a
								href="https://github.com/iqrasy/personal-calendar"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineGithub />
							</a>
						</p>
					</div>
					<div className="image-container">
						<img className="image-one" src={mainPage} />
						<img className="image-two" src={landingPage} />
					</div>
				</div>
			</div>
		</Div>
	);
};

export default ProjectOne;

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
