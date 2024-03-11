import React from "react";
import styled from "styled-components";
import { MdOutlineArrowOutward } from "react-icons/md";
import summary from "./asset/summary.png";

const Summarizer = () => {
	return (
		<Div>
			<div id="article-summarizer">
				<div className="main-container">
					<div className="project-text">
						<svg
							className="circle"
							width="7rem"
							height="8rem"
							viewBox="0 0 100 100"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="50"
								cy="50"
								r="45"
								fill="transparent"
								stroke="#6c757d"
								strokeWidth="1"
							/>
						</svg>
						<a
							className="link"
							href="https://github.com/iqrasy/AI-article-summarizer"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowOutward />
						</a>
					</div>
					<h1 className="head">
						AI ARTICLE SUMMARIZER
						<p className="description">
							I've developed a powerful SaaS article summarizer powered by
							ChatGPT-4. The frontend, built with React and Redux, offers a
							seamless user experience. With a strong focus on SEO, this
							application ensures that content is not only summarized
							efficiently but also optimized for search engine visibility.
						</p>
					</h1>
					<div className="image-container">
						<img className="image-one" src={summary} />
					</div>
				</div>
			</div>
		</Div>
	);
};

export default Summarizer;

const Div = styled.div`
	height: 100vh;
`;
