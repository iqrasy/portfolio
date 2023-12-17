import React from "react";
import styled from "styled-components";

const Link = () => {
	const items = ["Homepage", "About", "Portfolio", "Services", "Contact"];
	return (
		<Main>
			{items.map((item) => (
				<div key={item}>
					<a href={`#${item}`}>{item}</a>
				</div>
			))}
		</Main>
	);
};

export default Link;

const Main = styled.div`
	display: flex;
	/* border: solid black 1px; */
	justify-content: center;
	white-space: nowrap;
	align-items: center;
	flex-direction: row;
	color: black;
	margin: auto;
	padding: 1rem;
	/* position: fixed; */
	/* left: 50%; */

	a {
		font-size: 1rem;
		padding: 5rem;
	}
`;
