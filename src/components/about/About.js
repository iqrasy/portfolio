import React from "react";
import styled from "styled-components";
import "./about.scss";

const About = () => {
	const items = ["Portfolio"];

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
			<div className="button-circle">
				{items.map((item) => (
					<div key={item}>
						<a href={`#${item}`}>
							<svg className="circle" viewBox="0 0 100 100">
								<circle
									cx="50"
									cy="50"
									r="45"
									fill="transparent"
									stroke="black"
									strokeWidth=".2"
								></circle>
							</svg>
							<p className="inner-circle">scroll</p>
						</a>
					</div>
				))}
			</div>
			{/* <Tech> */}
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
			{/* </Tech> */}
		</Div>
	);
};

export default About;

const Div = styled.div``;

// const AboutMe = styled.div`
// 	padding: 2rem 0 0 2rem;
// 	z-index: 2;

// 	@media only screen and (max-width: 480px) {
// 	}
// `;

// const AboutContent = styled.div``;

// const Tech = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	padding: 2rem 0 0 2rem;
// 	width: 85%;
// 	height: 27vh;
// 	margin-top: 10rem;
// 	z-index: 2;

// 	div {
// 		display: flex;
// 		align-items: center;
// 		justify-content: flex-start;
// 	}

// 	ul {
// 		width: 18rem;
// 		padding-left: 5rem;
// 		margin-top: 5rem;
// 		list-style-type: none;
// 		display: grid;
// 		align-items: right;
// 		justify-content: center;
// 		grid-template-columns: repeat(2, 1fr);
// 		grid-template-rows: repeat(3, auto);
// 		grid-gap: 0.1rem;
// 	}

// 	p {
// 		font-size: 1.5rem;
// 		padding-top: 1rem;
// 		line-height: 1.5;
// 		width: 15rem;
// 	}

// 	@media only screen and (max-width: 480px) {
// 		margin-top: 2rem;
// 		padding: 0;
// 		height: auto;
// 		width: 100%;
// 		display: block;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: center;

// 		ul {
// 			display: grid;
// 			grid-template-columns: repeat(1, 1fr);
// 			grid-gap: 0.1rem;
// 			font-size: 1rem;
// 			width: 19rem;
// 			margin: 1rem 0;
// 			padding-left: 1rem;
// 		}

// 		p {
// 			font-size: 1rem;
// 			line-height: 1.5;
// 			max-width: 10rem;
// 			margin-left: 1rem;
// 			margin-right: auto;
// 		}
// 	}
// `;
