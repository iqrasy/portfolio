import React from "react";
import Link from "./Link";
import styled from "styled-components";

const SidePart = () => {
	return (
		<Main>
			<Link />
		</Main>
	);
};

export default SidePart;

const Main = styled.div`
	/* position: relative; */
`;
