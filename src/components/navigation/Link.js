import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const Link = () => {
	const items = ["Homepage", "About ", "Portfolio", "Contact"];
	return (
		<Main>
			<nav>
				{items.map((item) => (
					<div key={item}>
						<RouterLink to={`/${item.toLowerCase()}`}>
							{item.split("").map((char, index) => (
								<span key={index}>{char}</span>
							))}
						</RouterLink>
					</div>
				))}
			</nav>
		</Main>
	);
};

export default Link;

const Main = styled.div`
	color: black;
	margin: auto;
	/* padding: 1rem; */
	cursor: pointer;

	a {
		transition: transform 0.3s ease;
		font-size: 1rem;
		padding: 1rem 0;
		display: block;

		&:hover {
			transform: translateX(5px);
		}
	}

	span {
		display: block;
		transform: rotate(90deg);
		transform-origin: center;
	}
`;
