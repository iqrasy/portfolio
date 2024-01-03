import React from "react";
import styled from "styled-components";

const Link = () => {
	const items = ["Homepage", "About", "Portfolio", "Contact"];

	return (
		<Main>
			<nav>
				{items.map((item) => (
					<div key={item}>
						<a href={`/#${item}`}>
							{item.split("").map((char, index) => (
								<span key={index}>{char}</span>
							))}
						</a>
					</div>
				))}
			</nav>
		</Main>
	);
};

export default Link;

const Main = styled.div`
	margin: auto;
	cursor: pointer;

	a {
		transition: transform 0.3s ease;
		font-size: 1rem;
		padding: 1rem 0;
		display: block;
		text-decoration: none;

		&:hover {
			transform: translateX(5px);
		}
	}

	span {
		display: block;
		transform: rotate(90deg);
		transform-origin: center;
	}

	@media only screen and (max-width: 480px) {
		/* display: none; */
	}
`;
