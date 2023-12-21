import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectFive = () => {
	return (
		<div id="metropole">
			<div className="main-container">
				<div className="main-header">
					<h1 className="head">MÉTROPOLE</h1>
					<p className="description">
						Métropole is a travellers guide to Montreal. It allows you to book
						restaurants, hotels, and activities all in one place. You can create
						an account which makes it easy to manage your bookings.
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
	);
};

export default ProjectFive;
