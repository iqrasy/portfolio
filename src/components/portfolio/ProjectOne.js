import React from "react";
import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";

import landingPage from "./asset/LandingPage.png";
import mainPage from "./asset/mainPage.png";

const ProjectOne = () => {
	return (
		<Div>
			<div id="calendar">
				<div className="main-container">
					<h1 className="head">
						PERSONAL-CALENDAR
						<p className="description">
							I've developed my own version of a calendar where you can plan out
							your day, week, and year. The Modern Calendar App is a
							feature-rich, user-friendly calendar application designed to
							streamline your scheduling and organization needs. It offers a
							seamless and intuitive experience with a React-based frontend and
							a powerful backend powered by Node.js, Express, and PostgreSQL.
						</p>
						<a
							href="https://github.com/iqrasy/personal-calendar"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowOutward />
						</a>
					</h1>
					<div className="image-container">
						<img className="image-one" src={mainPage} />
					</div>
				</div>
			</div>
		</Div>
	);
};

export default ProjectOne;

const Div = styled.div`
	height: 100vh;
`;
