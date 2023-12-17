import React, { useState } from "react";
import "./hero.scss";
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

// const sliderText = {
// 	initial: {
// 		x: "200%",
// 	},
// 	animate: {
// 		x: "-300%",
// 		transition: {
// 			repeat: Infinity,
// 			repeatType: "mirror",
// 			duration: 1,
// 		},
// 	},
// };

const Hero = () => {
	const items = ["About Me"];

	return (
		<div className="hero">
			<motion.div
				className="pitch"
				variants={textVariant}
				initial="initial"
				animate="animate"
			>
				<p>Iqra Imran Syed</p>
				<h1>
					Transforming Ideas into Digital Reality By Designing and Developing
					Exceptional Web Solutions. Your vision, My Expertise
				</h1>
			</motion.div>
			<div className="scroll-down">
				<div className="about-me">
					{items.map((item) => (
						<div key={item}>
							<a className="button" href={`#${item}`}>
								{item}
								<div class="button__horizontal"></div>
								<div class="button__vertical"></div>
							</a>
						</div>
					))}
				</div>
				<div className="scroll"></div>
			</div>
			<div className="blob-container">
				<div className="blob"></div>
				<div className="blob-two"></div>
				<div className="blob-three"></div>
			</div>
			{/* <div
				className="sliding-text"
				variants={sliderText}
				initial="initial"
				animate="animate"
			>
				WEB AND MOBILE DEVELOPER
			</div> */}
		</div>
	);
};

export default Hero;
