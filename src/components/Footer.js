import React from "react";
import styled from "styled-components";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<FooterContainer>
			<div className="footer-container">
				<h3>Built and Designed by Iqra Imran Syed</h3>
				<h3 className="copyright">Copyright © {year} </h3>
			</div>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.footer`
	padding: 0.5rem;
	bottom: 0;
	width: 100%;
	font-family: "Nunito", sans-serif;
	color: grey;
	margin-left: 5rem;

	.footer-container {
		font-size: 0.7rem;
	}

	.copyright {
		padding-left: 3rem;
	}

	@media only screen and (max-width: 480px) {
		position: relative;
		bottom: 4rem;
		text-align: center;
		font-size: 1rem;

		.copyright {
			padding-left: 0;
		}

		.link-component {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
		}
	}
`;
