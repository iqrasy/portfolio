import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import "./portfolio.scss";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";
import ProjectSix from "./ProjectSix";
gsap.registerPlugin(ScrollTrigger);

const textVariant = {
	initial: {
		opacity: 0,
		x: 50,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
};

const Projects = () => {
	const navigate = useNavigate();
	const [selectedProject, setSelectedProject] = useState(null);
	const cardData = [
		{ title: "PERSONAL CALENDAR", link: "calendar", id: "1" },
		{ title: "AI ARTICLE SUMMARIZER", link: "article-summarizer", id: "2" },
		{ title: "CHAT-GPT CLONE", link: "chatgpt clone", id: "3" },
		{ title: "PORTFOLIO", link: "portfolio", id: "4" },
		{ title: "MÉTROPOLE", link: "metropole", id: "5" },
		{ title: "ORBIT", link: "orbit", id: "6" },
	];

	const controls = useAnimation();

	useEffect(() => {
		gsap.from(".box", {
			opacity: 0,
			y: 50,
			duration: 1,
			scrollTrigger: {
				trigger: ".box",
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse",
			},
		});

		gsap.from(".first-div, .projects", {
			opacity: 0,
			y: 0,
			stagger: 0.1,
			duration: 1,
			scrollTrigger: {
				trigger: ".box",
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

	const handleProjects = (action) => {
		switch (action) {
			case "PERSONAL CALENDAR":
				return <ProjectOne />;
			case "AI ARTICLE SUMMARIZER":
				return <ProjectTwo />;
			case "CHAT-GPT CLONE":
				return <ProjectThree />;
			case "PORTFOLIO":
				return <ProjectFour />;
			case "MÉTROPOLE":
				return <ProjectFive />;
			case "ORBIT":
				return <ProjectSix />;
			default:
				return <p>Click me</p>;
		}
	};

	const handleProjectClick = (title) => {
		const el = document.querySelector(".project-container");
		setSelectedProject(title);
		gsap.timeline().to(el, {
			y: 0,
			duration: 0.5,
			ease: "power2.inOut",
		});
	};

	const handleCloseClick = () => {
		const el = document.querySelector(".project-container");

		gsap.timeline().to(el, {
			yPercent: 4000,
			duration: 2,
			ease: "power2.inOut",
			onComplete: function () {
				setSelectedProject("");
			},
		});
	};

	return (
		<>
			<div className="firs-cont">
				<div className="first-div">
					{cardData.map((card, index) => (
						<div key={index} className="box">
							<span className="num"> {card.id}</span>
							<p
								onClick={() => handleProjectClick(card.title)}
								className="projects"
							>
								{card.title}
							</p>
						</div>
					))}
				</div>
				{selectedProject && (
					<ProjectContainer className="project-container">
						<div>
							<button className="close close-btn" onClick={handleCloseClick}>
								CLOSE
							</button>
							{handleProjects(selectedProject)}
						</div>
					</ProjectContainer>
				)}
			</div>
		</>
	);
};

export default Projects;

const ProjectContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	height: 100vh;
	width: 100vw;
	color: white;
	background-color: #252422;
	z-index: 10;
	transform: translateY(100vh);
	/* transition: transform 0.2s ease-in-out; */
	overflow-y: auto;

	.close {
		position: absolute;
		top: 5rem;
		right: 3rem;
		color: #adb5bd;
		border: solid rgba(255, 255, 255, 0.05) 1px;
		outline: none;
		z-index: 100;
		cursor: pointer;
		background: transparent;
		backdrop-filter: blur(12.5px);
		-webkit-backdrop-filter: blur(12.5px);
		width: 12vh;
		height: 5vh;
		border-radius: 2rem;

		&:hover {
			/* background-color: red; */
		}
	}
`;
