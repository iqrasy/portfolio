import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import "./about.scss";
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
			staggerChildren: 0.1,
		},
	},
};

const About = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".first",
				scrub: 0.2,
				start: "top center",
				end: "bottom center",
			},
		});

		tl.to(".first", {
			y: "25%",
			duration: 1,
			ease: "none",
		});
	}, []);
	return (
		<>
			<button className="navigate" onClick={() => navigate("/")}>
				HOME
			</button>
			<motion.div
				className="main-head-container"
				variants={textVariant}
				initial="initial"
				animate="animate"
			>
				<h1 className="main-head"> ABOUT ME</h1>
			</motion.div>
			<Div>
				<div className="first">
					<div className="about">
						{/* <p>
							I'm Iqra. A web developer, problem solver, and critical thinker
						</p>

						<p>I first got into the tech realm </p> */}
						<h1 className="header">
							AS A PASSIONATE DEVELOPER, I SPECIALIZE IN CRAFTING
							<span> EXCEPTIONAL </span> DIGITAL EXPERIENCES. MY EXPERTISE LIES
							IN TRANSFORMING
							<span> INNOVATIVE </span>
							IDEAS INTO <span> FUNCTIONAL</span> WEB SOLUTIONS.
						</h1>
						<p className="text">
							MY JOURNEY IN THE TECH REALM IS FUELED BY A UNIQUE BLEND OF
							<span> CREATIVITY</span> AND <span> EXPERTISE</span>, WITH THE AIM
							OF BRINGING <span> YOUR VISION </span>TO LIFE.
						</p>
						<p className="text">
							EXPLORE HOW <span>MY SKILLS</span> CAN ELEVATE <span>YOUR </span>
							DIGITAL EXPERIENCE
						</p>
					</div>
				</div>

				{/* <div>
					<p>Among the technologies I am familiar with and have used are:</p>
					<span>
						<ul>
							<li>❐ JavaScript ES6+</li>
							<li>❐ React.JS</li>
							<li>❐ MongoDB</li>
							<li>❐ Bootstrap</li>
							<li>❐ Three.js</li>
							<li>❐ Node.JS</li>
							<li>❐ Express.JS</li>
							<li>❐ Python</li>
							<li>❐ PostgreSQL</li>
							<li>❐ Styled-Components</li>
							<li>❐ Tailwind CSS</li>
							<li>❐ Next.js</li>
						</ul>
					</span>
				</div> */}
			</Div>
		</>
	);
};

export default About;

const Div = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;
