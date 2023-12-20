import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import "./portfolio.scss";

gsap.registerPlugin(Draggable, ScrollTrigger);

const Projects = () => {
	const cardData = [
		{ title: "Personal Calendar", link: "calendar" },
		{ title: "AI article summarizer", link: "article-summarizer" },
		{ title: "Chat-GPT Clone", link: "chatgpt clone" },
		{ title: "Portfolio", link: "portfolio" },
		{ title: "Metropole", link: "metropole" },
		{ title: "Orbit", link: "orbit" },
		{ title: "Travel Agency", Link: "travel" },
	];

	useEffect(() => {
		var cards = gsap.utils.toArray(".creative-pro"),
			dragDistancePerRotation = 1000,
			radius = 500,
			proxy = document.createElement("div"),
			progressWrap = gsap.utils.wrap(0, 1),
			spin = gsap.fromTo(
				cards,
				{
					rotationY: (i) => (i * 360) / cards.length,
				},
				{
					rotationY: "-=360",
					duration: 25,
					ease: "none",
					repeat: -1,
					transformOrigin: "50% 50% " + -radius + "px",
				}
			),
			startProgress;

		Draggable.create(proxy, {
			trigger: ".demoWrapper",
			type: "x",
			allowNativeTouchScrolling: true,
			onPress() {
				gsap.killTweensOf(spin);
				spin.timeScale(0);
				startProgress = spin.progress();
			},
			onDrag: updateRotation,
			onThrowUpdate: updateRotation,
			onRelease() {
				if (!this.tween || !this.tween.isActive()) {
					gsap.to(spin, { timeScale: 1, duration: 1 });
				}
			},
			onThrowComplete() {
				gsap.to(spin, { timeScale: 1, duration: 1 });
			},
		});

		function updateRotation() {
			let p = startProgress + (this.startX - this.x) / dragDistancePerRotation;
			spin.progress(progressWrap(p));
		}
	}, []);

	return (
		<>
			<div className="demoWrapper">
				{cardData.map((card, index) => (
					<div key={index} className="card box creative-pro">
						<a href={`#${card.link}`}>
							<div className="card-body">
								<p className="card-clr">{card.title}</p>
							</div>
						</a>
					</div>
				))}
			</div>
			{/* <div className="project-text">
				<h2>Double click on title to be get more info on project</h2>
			</div> */}
		</>
	);
};

export default Projects;

const Container = styled.div`
	/* perspective: 2500px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;

	padding: 2rem; */
`;
