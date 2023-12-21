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
	];

	useEffect(() => {
		const cards = gsap.utils.toArray(".creative-pro");
		const radius = 460;
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
			gsap.set(cards, { rotationY: "+=4", repeat: -1, ease: "none" });
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

	return (
		<Div className="firs-cont">
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
		</Div>
	);
};
{
	/* <div className="project-text">
				<h2>Double click on title to be get more info on project</h2>
			</div> */
}

export default Projects;

const Div = styled.div`
	height: 100vh;
	background-color: hsla(31, 32%, 87%, 1);
	background-image: radial-gradient(
			at 2% 98%,
			hsla(5, 100%, 69%, 1) 0px,
			transparent 50%
		),
		radial-gradient(at 87% 85%, hsla(270, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 50% 51%, hsla(349, 100%, 87%, 1) 0px, transparent 50%),
		radial-gradient(at 98% 2%, hsla(5, 100%, 69%, 1) 0px, transparent 50%),
		radial-gradient(at 3% 49%, hsla(240, 66%, 94%, 1) 0px, transparent 50%),
		radial-gradient(at 4% 3%, hsla(17, 0%, 90%, 1) 0px, transparent 50%),
		radial-gradient(at 95% 51%, hsla(240, 66%, 94%, 1) 0px, transparent 50%);
`;
