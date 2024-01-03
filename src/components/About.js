import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
				<div className="main-head-cont">
					<h1 className="head-cont"> ABOUT ME</h1>
				</div>
				<h3 className="header">
					A developer, problem solver, and critical thinker
				</h3>
				<p className="text">
					I first got into the tech sphere when I was introduced to coding
					during my first year of university. I discovered a world where
					imagination translates into action, and ideas come to life at the
					click of a button. Since then, I have always been captivated by the
					infinite possibilities that technology offers. Which eventually led me
					to pursue a career in development.
				</p>
				{/* <p className="text">
					As I look back on how far I've come, I'm not just a developer; I'm a
					storyteller, using the language of code to bring narratives to life.
					The joy of solving problems, the thrill of mastering new technologies,
					and the satisfaction of creating something meaningful — these are the
					elements that fuel my enthusiasm for what I do.
				</p> */}
				<div>
					<h2 className="experience">EXPERIENCE</h2>
					<ul className="skills">
						<li>- Degree in web development</li>
						<li>- 1+ year of experience as a web developer</li>
						<li>- Currently working at Schevvratex Yarns as a Web Developer</li>
					</ul>
				</div>
				<div>
					<h2 className="experience">SKILLS</h2>
					<p className="skills">
						JavaScript / React.js / MongoDB / Node.js / Express.js / Three.js /
						Python / PostgreSQL / Bootstrap / Next.js / json / REST / GIT /
						GitHub / Auth0 / NPM / BASH
					</p>
				</div>
			</motion.div>
		</Div>
	);
};

export default About;

const Div = styled.div`
	.first {
		height: 100vh;
		width: 70vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		font-family: "Nunito", sans-serif;
		font-weight: 300;
		letter-spacing: 0.1rem;

		&::selection {
			background-color: white;
			color: black;
		}
	}

	.header {
		font-size: 2rem;
		font-weight: 300;
		margin-bottom: 2rem;
		text-align: left;
	}

	.text {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		min-width: 60vw;
	}

	.main-head-cont {
		height: 4rem;
		display: flex;
		justify-content: left;
		margin-bottom: 4rem;
	}

	.head-cont {
		font-family: "Stardom", sans-serif;
		text-align: center;
		font-size: 5rem;
	}

	.experience {
		margin-bottom: 1rem;
		font-family: "Stardom", sans-serif;
	}

	li {
		list-style-type: none;
	}

	.skills {
		margin-bottom: 2rem;
	}

	@media only screen and (max-width: 480px) {
		.first {
			width: 90vw;
			margin: 13rem auto;
		}

		.header {
			font-size: 1.3rem;
			margin-bottom: 2rem;
		}

		.text {
			font-size: 1.1rem;
			line-height: 1.5;
		}

		.main-head-cont {
			margin-bottom: 2rem;
		}

		.head-cont {
			font-size: 3rem;
		}

		.skills,
		.experience {
			line-height: 1.5;
			margin-bottom: 1rem;
		}
	}
`;
