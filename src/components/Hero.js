import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { theme } from "./Theme";

gsap.registerPlugin(ScrollTrigger);

const textVariant = {
	initial: {
		opacity: 0,
		y: "100%",
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 2,
			staggerChildren: 0.1,
		},
	},
};

const Hero = () => {
	useEffect(() => {
		const letters = document.querySelectorAll(".hero h1 span");

		gsap.to(letters, {
			y: 0,
			opacity: 1,
			stagger: 0.05,
			delay: 0.2,
			duration: 0.1,
		});

		gsap.to(".hero h1 span", {
			scrollTrigger: {
				scale: 0.5,
				trigger: ".hero",
				start: "top 80%",
				end: "bottom 20%",
				scrub: true,
				y: "100%",
				delay: 2,
				ease: "power2.inOut",
				duration: 0.1,
				stagger: 0.05,
				opacity: 0,
			},
		});

		gsap.to(".pitch", {
			scale: 4,
			scrollTrigger: {
				trigger: ".pitch",
				start: "top 90%",
				end: "top 10%",
				scrub: true,
				delay: 2,
				toggleClass: "scrollimgzoomin",
			},
			opacity: 0,
		});
	}, []);

	return (
		<>
			<Div className="hero">
				<motion.div variants={textVariant} initial="initial" animate="animate">
					<div className="pitch">
						<h1>
							{Array.from("IQRA.IMRAN.SYED").map((letter, index) => (
								<span key={index} className="scrollimgzoomin">
									{letter}
								</span>
							))}
						</h1>
					</div>
				</motion.div>
			</Div>
		</>
	);
};

export default Hero;

const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	flex-wrap: wrap;
	margin: 0 auto;
	height: 100vh;
	overflow-x: hidden;

	.pitch {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;

		h1 {
			font-family: "Stardom", sans-serif;
			letter-spacing: 0.7rem;
			font-size: 7rem;
			width: 100%;
			flex-wrap: wrap;
		}

		span {
			display: inline-block;
			position: relative;
			transform: translateY(115px);
			transition: transform 0.5s;
		}
	}

	@media (max-width: ${theme.breakpoints.lg}) {
		.pitch {
			h1 {
				font-size: 4rem;
			}
		}
	}

	@media (max-width: ${theme.breakpoints.sm}) {
		align-items: center;
		.pitch {
			h1 {
				font-size: 1.2rem;
			}
		}
	}
`;
