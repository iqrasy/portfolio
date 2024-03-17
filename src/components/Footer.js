import React from "react";
import styled from "styled-components";
import { theme } from "./Theme";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<FooterContainer>
			<p>Built and Designed by Iqra Imran Syed</p>
			<p>Copyright © {year} </p>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	font-family: "Nunito", sans-serif;
	color: var(--text-200);
	font-size: 0.7rem;
	background-color: var(--text-100);

	@media (max-width: ${theme.breakpoints.sm}) {
		position: relative;
		bottom: 0;
	}
`;
