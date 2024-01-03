import React from "react";
import styled from "styled-components";
import Links from "./Links";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<FooterContainer>
			<div className="footer-container">
				<h3>Built and Designed by Iqra Imran Syed</h3>
				<h3 className="copyright">Copyright © {year} </h3>
			</div>
			<div className="link-component">
				<Links />
			</div>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.footer`
	padding: 0.5rem;
	bottom: 0;
	width: 100%;
	text-align: left;
	font-family: "Nunito", sans-serif;
	color: grey;

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
