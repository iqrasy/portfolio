import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./about.scss";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".first",
				scrub: 0.2,
				start: "top top",
				end: "bottom top",
				// markers: true,
			},
		});

		tl.to(".first", {
			y: -100, // Adjust this value for the desired movement
			duration: 1,
			ease: "none",
		});
	}, []);
	return (
		<Div>
			<div className="first">
				<div className="about">
					<h1 className="header">
						AS A PASSIONATE DEVELOPER, I SPECIALIZE IN CRAFTING
						<span> EXCEPTIONAL </span> DIGITAL EXPERIENCES. MY EXPERTISE LIES IN
						TRANSFORMING
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
	);
};

export default About;

const Div = styled.div`
	height: 100vh;
	background-color: hsla(31, 56%, 92%, 1);
	background-image: radial-gradient(
			at 5% 5%,
			hsla(205, 12%, 10%, 0.71) 0%,
			transparent 50%
		),
		radial-gradient(at 1% 1%, hsla(34, 5%, 23%, 1) 0%, transparent 50%),
		radial-gradient(at 100% 1%, hsla(31, 55%, 92%, 1) 0%, transparent 50%),
		radial-gradient(at 50% 52%, hsla(6, 0%, 37%, 0.15) 0%, transparent 50%),
		radial-gradient(at 95% 93%, hsla(205, 12%, 10%, 0.71) 0%, transparent 50%),
		radial-gradient(at 99% 99%, hsla(33, 5%, 23%, 1) 0%, transparent 50%),
		radial-gradient(at 1% 99%, hsla(31, 55%, 92%, 1) 0%, transparent 50%);
`;
