import React from "react";
import styled from "styled-components";
import "./about.scss";

const About = () => {
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
	background-color: hsla(31, 32%, 87%, 1);
	background-image: radial-gradient(
			at 98% 98%,
			hsla(5, 100%, 69%, 1) 0px,
			transparent 50%
		),
		radial-gradient(at 3% 88%, hsla(270, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 50% 51%, hsla(349, 100%, 87%, 1) 0px, transparent 50%),
		radial-gradient(at 1% 2%, hsla(5, 100%, 69%, 1) 0px, transparent 50%),
		radial-gradient(at 3% 49%, hsla(240, 66%, 94%, 1) 0px, transparent 50%),
		radial-gradient(at 99% 2%, hsla(17, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 95% 51%, hsla(240, 66%, 94%, 1) 0px, transparent 50%);
`;
