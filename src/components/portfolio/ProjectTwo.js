import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import summary from "./asset/summary.png";

const ProjectTwo = () => {
	return (
		<Div>
			<div id="article-summarizer">
				<div className="main-container">
					<h1 className="head">AI ARTICLE SUMMARIZER</h1>
					<img className="image-one" src={summary} />
					<p className="description">
						I've developed a powerful SaaS article summarizer powered by
						ChatGPT-4. The frontend, built with React and Redux, offers a
						seamless user experience. With a strong focus on SEO, this
						application ensures that content is not only summarized efficiently
						but also optimized for search engine visibility.
						<a
							href="https://github.com/iqrasy/AI-article-summarizer"
							target="_blank"
							rel="noopener noreferrer"
						>
							<AiOutlineGithub />
						</a>
					</p>
				</div>
			</div>
		</Div>
	);
};

export default ProjectTwo;

const Div = styled.div`
	/* height: 100vh; */
`;
