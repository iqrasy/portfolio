import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Contact = () => {
	return (
		<>
			<Div className="wrap">
				<div className="container-wrapper">
					<div></div>
					<div className="first-grid">
						<p>
							Get in touch with me to discuss your project, ask questions, or
							inquire about my services. I am here to assist you.
						</p>
						<p>
							Email: syiqra@hotmail.com
							{/* Add a contact form if applicable */}
						</p>
					</div>
					<div className="second-grid">
						<p className="project">Got a Project in Mind?</p>
						<h1 className="links">LET'S TALK</h1>
					</div>
				</div>
				<div className="footer">{/* <Footer /> */}</div>
			</Div>
		</>
	);
};

export default Contact;

const Div = styled.div`
	.wrap {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 5rem;
		grid-row-gap: 0px;
		padding: 10rem 5rem;
		font-family: "Nunito", sans-serif;
		font-size: 1rem;
		height: 100vh;
	}

	.first-grid {
		font-size: 1.3rem;
		line-height: 1.4;
	}

	.second-grid {
		font-family: "Stardom", sans-serif;
		font-size: 3rem;
	}

	.project {
		font-family: "Nunito", sans-serif;
		font-size: 1rem;
	}
`;
