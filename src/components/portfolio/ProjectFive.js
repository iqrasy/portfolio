import React from "react";
import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectFive = () => {
	return (
		<Div>
			<div id="metropole">
				<div className="main-container">
					<h1 className="head">
						MÉTROPOLE
						<p className="description">
							Métropole is a travellers guide to Montreal. It allows you to book
							restaurants, hotels, and activities all in one place. You can
							create an account which makes it easy to manage your bookings.
						</p>
					</h1>
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
							href="https://github.com/iqrasy/Final-Project-Metropole"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowOutward />
						</a>
					</div>
					{/* <img className="image-one" src={mainPage} />
					<img className="image-two" src={landingPage} /> */}
				</div>
			</div>
		</Div>
	);
};

export default ProjectFive;

const Div = styled.div`
	height: 100vh;
`;
