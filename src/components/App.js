import React from "react";
import GlobalStyles from "./Globalstyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about/About";
import Projects from "./portfolio/Projects";
import Contact from "./contact/Contact";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
