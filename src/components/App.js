import React from "react";
import GlobalStyles from "./Globalstyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
