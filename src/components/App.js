import React from "react";
import GlobalStyles from "./Globalstyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sphere from "./Sphere";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				{/* <div className="circles">
					<div className="circle circle1"></div>
					<div className="circle circle2"></div>
					<div className="circle circle3"></div>
				</div> */}
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
