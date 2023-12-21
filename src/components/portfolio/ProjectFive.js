import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectFive = () => {
	return (
		<Div>
			<div id="metropole">
				<div className="main-container">
					<div className="main-header">
						<h1 className="head">MÉTROPOLE</h1>
						<p className="description">
							Métropole is a travellers guide to Montreal. It allows you to book
							restaurants, hotels, and activities all in one place. You can
							create an account which makes it easy to manage your bookings.
							<a
								href="https://github.com/iqrasy/Final-Project-Metropole"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineGithub />
							</a>
						</p>
					</div>
					{/* <div className="image-container">
					<img className="image-one" src={mainPage} />
					<img className="image-two" src={landingPage} />
				</div> */}
				</div>
			</div>
		</Div>
	);
};

export default ProjectFive;

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
