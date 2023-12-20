import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";

const ProjectTwo = () => {
	return (
		<div id="article-summarizer">
			<a
				href="https://github.com/iqrasy/AI-article-summarizer"
				target="_blank"
				rel="noopener noreferrer"
			>
				<AiOutlineGithub />
			</a>
			<div>
				<h1>AI-article-summarizer</h1>
			</div>
			<p>
				I've developed a powerful SaaS article summarizer powered by ChatGPT-4.
				The frontend, built with React and Redux, offers a seamless user
				experience. With a strong focus on SEO, this application ensures that
				content is not only summarized efficiently but also optimized for search
				engine visibility.
			</p>
		</div>
	);
};

export default ProjectTwo;
