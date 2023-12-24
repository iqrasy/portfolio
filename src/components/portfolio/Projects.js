import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import "./portfolio.scss";
import ProjectOne from "./ProjectOne";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";
import ProjectSix from "./ProjectSix";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, Draggable);

const Projects = () => {
	const navigate = useNavigate();
	const [selectedProject, setSelectedProject] = useState(null);
	const cardData = [
		{ title: "Personal Calendar", link: "calendar" },
		{ title: "AI article summarizer", link: "article-summarizer" },
		{ title: "Chat-GPT Clone", link: "chatgpt clone" },
		{ title: "Portfolio", link: "portfolio" },
		{ title: "Metropole", link: "metropole" },
		{ title: "Orbit", link: "orbit" },
	];

	useEffect(() => {
		const cards = gsap.utils.toArray(".creative-pro");
		const radius = 360;
		const proxy = document.createElement("div");

		cards.forEach(function (element, index) {
			gsap.set(element, {
				rotationY: ((index - 1) * 360) / cards.length,
				transformOrigin: "50% 50% " + -radius,
			});
		});

		gsap.set(".demoWrapper", { yPercent: 0 });

		let tl = gsap.to(".creative-pro", {
			rotationY: "+=360",
			duration: 1,
			ease: "none",
			scrollTrigger: {
				trigger: ".creative-pro",
				scrub: 0.2,
				start: "top bottom",
				end: "bottom top",
			},
		});

		gsap.to(".demoWrapper", {
			yPercent: 0,
			duration: 1,
			ease: "none",
			scrollTrigger: {
				trigger: ".creative-pro",
				scrub: 0.2,
				start: "top center",
				end: "bottom top",
			},
		});

		function rotation() {
			gsap.set(cards, { rotationY: "+=2", repeat: -0.1, ease: "none" });
		}

		Draggable.create(proxy, {
			trigger: ".demoWrapper",
			type: "rotation",
			duration: 10,
			inertia: true,
			allowNativeTouchScrolling: true,
			edgeResistance: 0.65,
			onDrag: rotation,
			onThrowUpdate: rotation,
			onRelease() {
				if (!this.tween || !this.tween.isActive()) {
					gsap.to(tl, { timeScale: 1, duration: 1 });
				}
			},
			onThrowComplete() {
				gsap.to(tl, { timeScale: 1, duration: 1 });
			},
		});
	}, []);

	const handleProjects = (action) => {
		switch (action) {
			case "Personal Calendar":
				return <ProjectOne />;
			case "AI article summarizer":
				return <ProjectTwo />;
			case "Chat-GPT Clone":
				return <ProjectThree />;
			case "Portfolio":
				return <ProjectFour />;
			case "Metropole":
				return <ProjectFive />;
			case "Orbit":
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
			duration: 0.2,
			ease: "power2.inOut",
		});
	};

	const handleCloseClick = () => {
		const el = document.querySelector(".project-container");
		setSelectedProject(null);
		gsap.to(el, {
			transform: "translateY(-100%)",
			duration: 0.2,
			ease: "power2.inOut",
			y: -100,
		});
	};

	useEffect(() => {
		const el = document.querySelector(".project-container");
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "top bottom",
				end: "bottom top",
				toggleActions: "play none none reverse",
				scrub: true,
			},
		});

		tl.to(el, {
			yPercent: -100,
			ease: "power2.inOut",
		});
	}, []);

	return (
		<>
			<button className="navigate" onClick={() => navigate("/")}>
				HOME
			</button>
			<div className="main-head-container">
				<h1 className="main-head">SCROLL</h1>
			</div>
			<Div className="firs-cont">
				<div className="demoWrapper">
					{cardData.map((card, index) => (
						<div
							key={index}
							className="card box creative-pro"
							onClick={() => handleProjectClick(card.title)}
						>
							<div className="card-body">
								<p className="card-clr">{card.title}</p>
							</div>
						</div>
					))}
				</div>
				{selectedProject && (
					<ProjectContainer className="project-container">
						<div>
							<button className="close" onClick={handleCloseClick}>
								Close
							</button>
							{handleProjects(selectedProject)}
						</div>
					</ProjectContainer>
				)}
			</Div>
		</>
	);
};

export default Projects;

const Div = styled.div`
	display: flex;
	height: 100vh;
	margin-bottom: 40rem;
`;

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
	transform: translateY(100%);
	transition: transform 0.5s ease-in-out;
	overflow-y: auto;

	.close {
		position: absolute;
		top: 5rem;
		color: white;
		border: none;
		outline: none;
		z-index: 100;
		cursor: pointer;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(12.5px);
		-webkit-backdrop-filter: blur(12.5px);
		width: 7rem;
		height: 3rem;
		border-radius: 2rem;
	}
`;
