import React from "react";
import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectFive = () => {
	return (
		<Div>
			<div id="metropole">
				<div className="main-container">
					<h1 className="head">MÉTROPOLE</h1>
					{/* <img className="image-one" src={mainPage} />
					<img className="image-two" src={landingPage} /> */}
					<p className="description">
						Métropole is a travellers guide to Montreal. It allows you to book
						restaurants, hotels, and activities all in one place. You can create
						an account which makes it easy to manage your bookings.
						<a
							href="https://github.com/iqrasy/Final-Project-Metropole"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowOutward />
						</a>
					</p>
				</div>
			</div>
		</Div>
	);
};

export default ProjectFive;

const Div = styled.div`
	height: 100vh;
`;
