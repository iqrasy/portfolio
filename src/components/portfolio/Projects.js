import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import data from "./ProjectData";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Carousel } from "react-bootstrap";
import "./portfolio.scss";

gsap.registerPlugin(ScrollTrigger);

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
				<div className="main-container">
					<div className="inner-container">
						<button className="close close-btn" onClick={handleCloseClick}>
							X
						</button>
						<div className="text-container">
							<h2 className="head">{selectedProjectData.title}</h2>
							<p className="description">
								{selectedProjectData.description}{" "}
								<a
									className="link"
									href={selectedProjectData.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									<MdOutlineArrowOutward />
								</a>
							</p>
						</div>
						{Array.isArray(selectedProjectData.images) &&
						selectedProjectData.images.length > 1 ? (
							<div className="image-container">
								<Carousel interval={6000} touch={true} pause="hover" fade>
									{selectedProjectData.images.map((image, index) => (
										<Carousel.Item key={index}>
											<img
												src={image.url}
												alt={image.altText}
												className="d-block w-100 centered-image"
											/>
										</Carousel.Item>
									))}
								</Carousel>
							</div>
						) : (
							<div className="image-container">
								<img
									className="image centered-image"
									src={selectedProjectData.images?.url}
									alt={selectedProjectData.images?.altText}
								/>
							</div>
						)}
					</div>
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
						key={card.id}
						className="project-container"
						onClick={() => handleProjectClick(card.title)}
					>
						<span className="num"> {card.num}</span>
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
	font-family: "Nunito", sans-serif;
`;

const ProjectDiv = styled.div`
	margin-top: 0.6rem;
	padding: 0.5rem;
	width: 15rem;
	border-bottom: 1px solid #3e3e3e;
	display: flex;
	gap: 0.5rem;

	p {
		text-align: left;
		font-size: 1rem;
		margin: 0;
	}

	.num {
		font-size: 0.6rem;
		margin-top: 0.4rem;
	}

	&:hover {
		cursor: pointer;
	}
`;
