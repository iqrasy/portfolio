import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Sphere from "./Sphere";

const textVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 2,
			staggerChildren: 0.1,
		},
	},
};

const Hero = () => {
	return (
		<>
			<Div className="hero">
				<motion.div variants={textVariant} initial="initial" animate="animate">
					<div className="pitch">
						{/* <h1>Iqra Imran Syed</h1> */}
						<h1>IQRA IMRAN SYED</h1>
						<Sphere />
					</div>
				</motion.div>
			</Div>
		</>
	);
};

export default Hero;

const Div = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-wrap: wrap;
	position: relative;
	top: 14rem;
	right: 50rem;
	height: 50vh;

	.pitch {
		position: relative;
		display: flex;
		align-items: center;
		h1 {
			font-family: "Stardom", sans-serif;
			letter-spacing: 0.7rem;
			margin-bottom: 2rem;
			font-size: 7rem;
			flex-wrap: wrap;
			width: 20vh;
			margin-left: 5rem;
		}
	}

	@media only screen and (max-width: 480px) {
		.pitch {
			max-width: 80vw;
			width: 80vw;

			h1 {
				width: 20rem;
				font-size: 1.1rem;
				text-indent: 0;
				margin-left: 0;
				margin-bottom: 7rem;
				line-height: 1.4;
			}
		}
	}

	@media only screen and (max-width: 480px) {
		.pitch {
			h1 {
				font-size: 2rem;
				line-height: 1.2;
				margin-bottom: 1rem;
			}

			p {
				font-size: 1rem;
				width: 20rem;
				text-align: left;
				margin-bottom: 2rem;
			}

			.vision {
				font-size: 1rem;
			}
		}
	}
`;
