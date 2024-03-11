import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import data from "./portfolio/ProjectData";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { MdOutlineArrowOutward } from "react-icons/md";
import "./portfolio/portfolio.scss";

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState(null);

	const handleProjectClick = (title) => {
		setSelectedProject(title);
		setTimeout(() => {
			const el = document.querySelector(".project-container");
			gsap.timeline().to(el, {
				y: 0,
				duration: 0.5,
				ease: "power2.inOut",
			});
		}, 0);
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

	const handleProjects = (title) => {
		const selectedProjectData = data.find((project) => project.title === title);

		if (selectedProjectData) {
			return (
				<div>
					<h2>{selectedProjectData.title}</h2>
					<p>{selectedProjectData.description}</p>
					{Array.isArray(selectedProjectData.images) ? (
						selectedProjectData.images.map((image, index) => (
							<img key={index} src={image.url} alt={image.altText} />
						))
					) : (
						<img
							src={selectedProjectData.images?.url}
							alt={selectedProjectData.images?.altText}
						/>
					)}
					<a
						className="link"
						href={selectedProjectData.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<MdOutlineArrowOutward />
					</a>
					<button className="close close-btn" onClick={handleCloseClick}>
						CLOSE
					</button>
				</div>
			);
		} else {
			return <p>Select a project</p>;
		}
	};

	return (
		<Div>
			<Container>
				{data.map((card, index) => (
					<ProjectDiv
						key={index}
						className="project-container"
						onClick={() => handleProjectClick(card.title)}
					>
						<span className="num"> {card.id}.</span>
						<p className="projects">{card.title}</p>
					</ProjectDiv>
				))}
			</Container>
			<div>{selectedProject && handleProjects(selectedProject)}</div>
		</Div>
	);
};

export default Projects;

const Div = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 0 auto;
	width: 100vw;
	height: 100vh;
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, 1fr);
	padding: 2rem;
	border: solid red 1px;
	font-family: "Nunito", sans-serif;
`;

const ProjectDiv = styled.div`
	margin-top: 0.6rem;
	padding: 0.5rem;
	width: 13rem;
	background: rgba(255, 255, 255, 0.1);
	backdrop-filter: blur(8.5px);
	-webkit-backdrop-filter: blur(8.5px);
	border-radius: 1rem;
	border: 1px solid transparent;
	display: flex;
	gap: 0.5rem;

	p {
		text-align: left;
		font-size: 1rem;
	}

	span {
	}

	&:hover {
		border: 1px solid rgba(255, 255, 255, 0.18);
		cursor: pointer;
	}
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
	color: #eaded2;
	background-color: #000814;
	z-index: 10;
	transform: translateY(100vh);
	transition: transform 0.2s ease-in-out;
	overflow-y: auto;

	.close {
		position: absolute;
		top: 5rem;
		right: 9rem;
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
		box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.5);
		transition: box-shadow 0.3s ease-in-out;

		&:hover {
			box-shadow: 0 0 50px 5px #cdb4db;
		}
	}

	@media only screen and (max-width: 480px) {
		.close {
			top: 9rem;
			right: 2rem;
		}
	}
`;
