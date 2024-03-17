import landingPage from "./asset/LandingPage.png";
import mainPage from "./asset/mainPage.png";
import summary from "./asset/summary.png";
import chat from "./asset/chat.png";
import first from "./asset/First.png";

const data = [
	{
		id: 1,
		num: "01",
		title: "BENEFITS BUDDY",
		description: "",
		link: "",
		images: "",
	},
	{
		id: 2,
		num: "02",
		title: "CALENDAR",
		description:
			"I've developed my own version of a calendar where you can plan out your day, week, and year. The Modern Calendar App is a user-friendly application designed to streamline your scheduling and organization needs. It offers a seamless and intuitive	experience with a React-based frontend and a powerful backend powered by Node.js, Express, and PostgreSQL.",
		link: "https://github.com/iqrasy/personal-calendar",
		images: [
			{ url: landingPage, altText: "calendar landing page" },
			{ url: mainPage, altText: "calendar main page" },
		],
	},
	{
		id: 3,
		num: "03",
		title: "AI ARTICLE SUMMARIZER",
		description:
			"I've developed a powerful SaaS article summarizer powered by ChatGPT-4. The frontend, built with React and Redux, offers a seamless user experience. With a strong focus on SEO, this application ensures that content is not only summarized efficiently but also optimized for search engine visibility.",
		link: "https://github.com/iqrasy/AI-article-summarizer",
		images: { url: summary, altText: "ai summarizer main page" },
	},
	{
		id: 4,
		num: "04",
		title: "CHAT-GTP CLONE",
		description:
			"This project is a ChatGPT clone developed using the OpenAI API, specifically utilizing the 'gpt-3.5-turbo' model. It is implemented as a single-page React application, featuring user authentication and signup functionality powered by Auth0. Auth0 also provides conversation tracking capabilities, enabling seamless management of user interactions and chat history.",
		link: "https://github.com/iqrasy/ChatGPT-clone",
		images: [
			{ url: chat, altText: "chat page" },
			{ url: first, altText: "login pages" },
		],
	},
	{
		id: 5,
		num: "05",
		title: "MÉTROPOLE",
		description:
			"Métropole is a travellers guide to Montreal. It allows you to book restaurants, hotels, and activities all in one place. You can create an account which makes it easy to manage your bookings.",
		link: "https://github.com/iqrasy/Final-Project-Metropole",
		images: "",
	},
	{
		id: 6,
		num: "06",
		title: "PORTFOLIO",
		description:
			"This is my personal portfolio, built with React.js, GSAP animations and framer motion and designed to showcase my work and skills!",
		link: "https://github.com/iqrasy/portfolio",
		images: "",
	},
];

export default data;
