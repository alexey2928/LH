import React from "react";

import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Navbar from "./Navbar";
import About from "./About";

const FullPage = () => {
	return (
		<div>
			<Navbar />
			<div className="home">
				<Home />
			</div>
			{/* <div className="services">
				<Services />
			</div>
			<div className="portfolio">
				<Portfolio />
			</div>
			<div className="about">
				<About/>
			</div> */}
		</div>
	);
};

export default FullPage;
