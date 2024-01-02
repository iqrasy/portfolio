import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "./Footer";

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

const Contact = () => {
	const controls = useAnimation();

	useEffect(() => {
		gsap.from(".wrap", {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: ".wrap",
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse",
			},
		});

		gsap.from(".first-grid, .second-grid, .footer", {
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
		<>
			<Div className="wrap">
				<div className="container-wrapper">
					<div></div>
					<div className="first-grid">
						<p>
							Get in touch with me to discuss your project, ask questions, or
							inquire about my services. I am here to assist you.
						</p>
						<p>Email: syiqra@hotmail.com</p>
					</div>
					<div className="second-grid">
						<p className="project">Got a Project in Mind?</p>
						<h1 className="links">LET'S TALK</h1>
					</div>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</Div>
		</>
	);
};

export default Contact;

const Div = styled.div`
	.wrap {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container-wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		grid-column-gap: 5rem;
		grid-row-gap: 0px;
		padding: 10rem 5rem;
		font-family: "Nunito", sans-serif;
		font-size: 1rem;
		height: 100vh;
	}

	.first-grid {
		font-size: 1.3rem;
		line-height: 1.4;
	}

	.second-grid {
		font-family: "Stardom", sans-serif;
		font-size: 3rem;
	}

	.project {
		font-family: "Nunito", sans-serif;
		font-size: 1rem;
	}
`;
