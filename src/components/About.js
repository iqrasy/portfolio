import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import starr from "../assets/starr.png";
import squares from "../assets/squares.png";
import circles from "../assets/circles.png";

gsap.registerPlugin(ScrollTrigger);

const textVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
};

const About = () => {
	const controls = useAnimation();

	useEffect(() => {
		gsap.from(".head-cont", {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: ".head-cont",
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse",
			},
		});

		gsap.from(".header, .text, .experience, .skills", {
			opacity: 0,
			y: 50,
			stagger: 0.1,
			duration: 1,
			scrollTrigger: {
				trigger: ".header",
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse",
			},
		});

		controls.start({ opacity: 1, x: 0 });

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, [controls]);

	return (
		<Div>
			<motion.div
				className="first"
				variants={textVariant}
				initial="initial"
				animate={controls}
			>
				<SecondBox>
					<Header>
						<h1 className="head-cont"> ABOUT </h1>
					</Header>
				</SecondBox>
				<ThirdBox>
					<SubHeader>
						<p>
							Hey there! I'm Iqra - a Frontend Web Developer based in Montreal
						</p>
					</SubHeader>
				</ThirdBox>
				<FourthBox>
					<Intro>
						<p>
							My goal is to make the web not only functional but also visually
							engaging and enjoyable for users
						</p>
					</Intro>
				</FourthBox>
				<FifthBox>
					<Description>
						<p>
							I create seamless and responsive UI's that elevate digital
							experiences
						</p>
					</Description>
				</FifthBox>
				<ImageContainer>
					<img src={starr} alt="star" />
				</ImageContainer>
				<SquareContainer>
					<img src={squares} alt="squares" />
				</SquareContainer>
				<CircleContainer>
					<img src={circles} alt="rings" />
				</CircleContainer>
				{/* <div>
					<h2 className="experience">EXPERIENCE</h2>
					<ul className="skills">
						<li> Degree in web development</li>
						<li> 1+ year of experience </li>
						<li> Currently working at Schevratex Yarns as a Web Developer</li>
					</ul>
				</div>
				<div>
					<h2 className="experience">SKILLS</h2>
					<p className="skills">
						JavaScript / React.js / MongoDB / Node.js / Express.js / Three.js /
						PostgreSQL / Bootstrap / Next.js / json / REST / GIT / GitHub /
						Auth0 / NPM / BASH
					</p>
				</div> */}
			</motion.div>
		</Div>
	);
};

export default About;

const Div = styled.div`
	background-image: linear-gradient(
			#463f3a 0.1px,
			transparent 0.5px,
			transparent calc(100% - 0.5px),
			#463f3a calc(100% - 0.5px)
		),
		linear-gradient(
			90deg,
			#463f3a 0.1px,
			transparent 0.2px,
			transparent calc(100% - 0.5px),
			#463f3a calc(100% - 0.5px)
		);
	background-size: 20% 20%;

	.first {
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);
		margin: 0 auto;
		font-family: "Nunito", sans-serif;
		letter-spacing: 0.1rem;
	}

	/* 
	.experience {
		margin-bottom: 1rem;
		font-family: "Stardom", sans-serif;
	} */

	/* li {
		list-style-type: none;
	} */

	/* .skills {
		margin-bottom: 2rem;
		width: 40vw;
		line-height: 1.5;
	} */
`;

const Header = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;

	h1 {
		font-family: "Stardom", sans-serif;
		font-size: 4rem;
	}
`;

const SecondBox = styled.div`
	grid-column: 1;
	grid-row: 3;
`;

const SubHeader = styled.div`
	margin: 0 auto;

	p {
		padding: 1rem;
	}
`;

const ThirdBox = styled.div`
	grid-column: 3;
	grid-row: 2;
	display: flex;
	align-items: center;
`;

const Intro = styled.div`
	p {
		padding: 1rem;
	}
`;

const FourthBox = styled.div`
	grid-column: 3;
	grid-row: 4;
	display: flex;
	align-items: center;
`;

const Description = styled.div`
	p {
		padding: 1rem;
	}
`;

const FifthBox = styled.div`
	grid-column: 4;
	grid-row: 3;
	display: flex;
	align-items: center;
`;

const ImageContainer = styled.div`
	grid-column: 2;
	grid-row: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 15vh;
		opacity: 0.3;
	}
`;

const SquareContainer = styled.div`
	grid-column: 5;
	grid-row: 2;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 15vh;
		opacity: 0.3;
	}
`;

const CircleContainer = styled.div`
	grid-column: 1;
	grid-row: 5;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		height: 15vh;
		opacity: 0.3;
	}
`;
