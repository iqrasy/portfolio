import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
	/* border: solid green 1px; */
	height: 100%;

	.pitch {
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		h1 {
			font-family: "Stardom", sans-serif;
			letter-spacing: 0.7rem;
			font-size: 7rem;
			width: 100%;
		}

		span {
			display: inline-block;
			position: relative;
			transform: translateY(115px);
			transition: transform 0.5s;
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
