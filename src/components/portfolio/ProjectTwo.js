import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import summary from "./asset/summary.png";

const ProjectTwo = () => {
	return (
		<Div>
			<div id="article-summarizer">
				<div className="main-container">
					<div className="main-header">
						<h1 className="head">AI ARTICLE SUMMARIZER</h1>
						<p className="description">
							I've developed a powerful SaaS article summarizer powered by
							ChatGPT-4. The frontend, built with React and Redux, offers a
							seamless user experience. With a strong focus on SEO, this
							application ensures that content is not only summarized
							efficiently but also optimized for search engine visibility.
							<a
								href="https://github.com/iqrasy/AI-article-summarizer"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineGithub />
							</a>
						</p>
					</div>
					<div className="image-container">
						<img className="image-one" src={summary} />
					</div>
				</div>
			</div>
		</Div>
	);
};

export default ProjectTwo;

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
