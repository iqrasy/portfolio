import React, { useEffect } from "react";
import styled from "styled-components";
import { useAnimation } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "./Footer";
import { theme } from "./Theme";

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
			<Main>
				<Div>
					<Container>
						<Inquiry>
							<p>Ready to Launch Your Online Success Story?</p>
							{/* <p>LET'S TALK</p> */}
						</Inquiry>
						<h1>
							IQRA <br />
							IMRAN <br />
							SYED
						</h1>
					</Container>
					<Links>
						<div>
							<h3>GITHUB</h3>
							<span>.01</span>
						</div>
						<div>
							<h3>SERVICES</h3>
							<span>.02</span>
						</div>
						<div>
							<h3>RESUME</h3>
							<span>.03</span>
						</div>
						<div>
							<h3>CONTACT</h3>
							<span>.04</span>
						</div>
					</Links>
					<FooterContainer>
						<Footer />
					</FooterContainer>
				</Div>
			</Main>
		</>
	);
};

export default Contact;

const Main = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const FooterContainer = styled.footer`
	margin-top: auto;
`;

const Div = styled.div`
	background-color: var(--text-100);
	color: var(--text-200);
	border-top-right-radius: 3rem;
	border-top-left-radius: 3rem;
	width: 100vw;
	height: 100vh;
`;

const Container = styled.div`
	margin: 3rem 0;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	/* width: 100%; */

	h1 {
		grid-column: 2;
		font-size: 6rem;
		text-align: right;
		padding-right: 1rem;

		@media (max-width: ${theme.breakpoints.sm}) {
			font-size: 3rem;
			padding-right: 0.7rem;
		}
	}
`;

const Inquiry = styled.div`
	grid-column: 1;
	vertical-align: middle;
	margin: auto;

	p {
		font-family: "Nunito", sans-serif;
		font-size: 1.5rem;
		line-height: 1;
		padding-left: 1rem;

		@media (max-width: ${theme.breakpoints.sm}) {
			font-size: 1.2rem;
			padding-left: 0.7rem;
		}
	}
`;

const Links = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	height: 50vh;
	gap: 2rem;

	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 1rem;
		gap: 2rem;
		border-bottom: solid 1px var(--text-200);

		@media (max-width: ${theme.breakpoints.sm}) {
			gap: 1rem;

			h3 {
				font-size: 1rem;
			}

			span {
				font-size: 0.7rem;
			}
		}
	}

	@media (max-width: ${theme.breakpoints.sm}) {
		height: 60vh;
	}
`;
