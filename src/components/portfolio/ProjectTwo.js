import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import summary from "./asset/summary.png";

const ProjectTwo = () => {
	return (
		<div id="article-summarizer">
			<div className="main-container">
				<div className="main-header">
					<h1 className="head">AI ARTICLE SUMMARIZER</h1>
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
				<div className="image-container">
					<img className="image-one" src={summary} />
				</div>
			</div>
		</div>
	);
};

export default ProjectTwo;
