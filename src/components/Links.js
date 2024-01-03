import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

const Links = () => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/Iqra Imran Syed.pdf";
		link.download = "Iqra Imran Syed.pdf";
		link.click();
	};

	const links = [
		{
			url: "https://github.com/iqrasy",
			icon: "GH",
		},
		{
			url: "https://www.linkedin.com/in/iqraimransyed/",
			icon: "LI",
		},
		{
			url: "mailto:syiqra@hotmail.com",
			icon: "EM",
		},
	];
	return (
		<Div>
			<div className="socials">
				{links.map((link, index) => (
					<div className="social-links" key={index}>
						<a href={link.url} target="_blank" rel="noopener noreferrer">
							{link.icon}
						</a>
					</div>
				))}
				<div className="cv">
					<button onClick={handleDownload}>CV</button>
				</div>
			</div>
		</Div>
	);
};

export default Links;

const Div = styled.div`
	font-family: "Stardom", sans-serif;
	position: absolute;
	top: 1rem;
	left: 1rem;
	display: flex;
	flex-direction: column;

	button {
		background-color: transparent;
		border: none;
		font-family: "Stardom", sans-serif;
		font-size: 1rem;
		cursor: pointer;
		color: #eaded2;
		padding-top: 1rem;
		transition: transform 0.3s ease;

		&:hover {
			transform: translateX(5px);
		}
	}

	.cv {
		padding-top: 1rem;
	}

	.socials {
		display: flex;
		flex-direction: row;
	}

	.social-links {
		padding-top: 2rem;
		transition: transform 0.3s ease;
		border-radius: 50%;
		width: 4rem;

		&:hover {
			transform: translateX(5px);
		}
	}
`;
