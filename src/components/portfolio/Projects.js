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

gsap.registerPlugin(ScrollTrigger, Draggable);

const Projects = () => {
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
		const radius = 230;
		const proxy = document.createElement("div");

		cards.forEach(function (element, index) {
			gsap.set(element, {
				rotationY: ((index - 1) * 360) / cards.length,
				transformOrigin: "50% 50% " + -radius,
			});
		});

		gsap.set(".demoWrapper", { yPercent: -100 });

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
			yPercent: 100,
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
			gsap.set(cards, { rotationY: "+=1.8", repeat: -0.1, ease: "none" });
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
		setSelectedProject(title);
	};

	return (
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
				<div className="project-container">
					{handleProjects(selectedProject)}
				</div>
			)}
		</Div>
	);
};

export default Projects;

const Div = styled.div`
	display: flex;
	height: 100vh;
	background-color: hsla(31, 56%, 92%, 1);
	background-image: radial-gradient(
			at 95% 8%,
			hsla(205, 12%, 10%, 0.71) 0%,
			transparent 50%
		),
		radial-gradient(at 99% 1%, hsla(34, 5%, 23%, 1) 0%, transparent 50%),
		radial-gradient(at 1% 2%, hsla(31, 55%, 92%, 1) 0%, transparent 50%),
		radial-gradient(at 50% 52%, hsla(6, 0%, 37%, 0.15) 0%, transparent 50%),
		radial-gradient(at 6% 95%, hsla(205, 12%, 10%, 0.71) 0%, transparent 50%),
		radial-gradient(at 1% 99%, hsla(33, 5%, 23%, 1) 0%, transparent 50%),
		radial-gradient(at 99% 98%, hsla(31, 55%, 92%, 1) 0%, transparent 50%);
`;
