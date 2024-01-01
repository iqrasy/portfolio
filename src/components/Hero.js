import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
		<Div className="hero">
			<motion.div
				className="pitch"
				variants={textVariant}
				initial="initial"
				animate="animate"
			>
				<p>Iqra Imran Syed</p>
				<h1 className="hero-pitch">
					Transforming Ideas into Digital Reality By Designing and Developing
					Exceptional Web Solutions.
					<h1
						style={{
							fontFamily: "Stardom sans-serif",
							fontStyle: "italic",
							fontSize: "2.5rem",
						}}
					>
						YOUR VISION, MY EXPERTISE
						{/* Your vision, My Expertise */}
					</h1>
				</h1>
			</motion.div>
			<div className="blob-container">
				<div className="blob"></div>
				<div className="blob-two"></div>
				<div className="blob-three"></div>
			</div>
		</Div>
	);
};

export default Hero;

const Div = styled.div`
	.hero {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.pitch {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 10px;
		max-width: 80vw;
		width: 80vw;
		margin: 0 auto;

		h1 {
			width: 45rem;
			line-height: 1.2;
			font-weight: 300;
			font-size: 2rem;
			font-family: "Nunito", sans-serif;
			text-indent: -3rem;
			margin-left: 4rem;
		}

		p {
			font-family: "Stardom", sans-serif;
			letter-spacing: 0.7rem;
			margin-bottom: 2rem;
			font-size: 6rem;
			text-align: left;
		}
	}

	// .blob-container {
	// 	position: relative;
	// 	right: 20rem;
	// 	bottom: 10rem;
	// }

	// .blob {
	// 	position: absolute;
	// 	top: 30%;
	// 	left: 0;
	// 	width: 30%;
	// 	height: 30%;
	// 	border-radius: 50%;
	// 	z-index: -10;
	// 	background: #e7bc91;
	// 	// background: rgb(255, 77, 77);
	// 	filter: blur(105px);
	// 	animation: pulseAnimation 5s infinite alternate ease-in-out;
	// }

	// .blob-two {
	// 	position: absolute;
	// 	top: 24%;
	// 	left: 0;
	// 	width: 30rem;
	// 	height: 30rem;
	// 	border-radius: 50%;
	// 	z-index: -50;
	// 	background: #432818;
	// 	// background: rgb(235, 134, 136);
	// 	filter: blur(55px);
	// 	animation: pulseAnimation 5s infinite alternate ease-in-out;
	// }

	// .blob-three {
	// 	position: absolute;
	// 	top: 35%;
	// 	left: 5%;
	// 	width: 30rem;
	// 	height: 33rem;
	// 	border-radius: 50%;
	// 	z-index: -30;
	// 	// background: #ffedd8;
	// 	background: radial-gradient(
	// 		circle,
	// 		#ffedd8 50%,
	// 		rgb(232, 223, 204) 20%,
	// 		rgb(187, 162, 162) 40%
	// 	);
	// 	filter: blur(65px);
	// 	animation: pulseAnimation 5s infinite alternate ease-in-out;
	// }

	// @keyframes pulseAnimation {
	// 	0% {
	// 		transform: scale(1);
	// 	}
	// 	50% {
	// 		transform: scale(1);
	// 	}
	// 	100% {
	// 		transform: scale(1);
	// 	}
	// }
`;
