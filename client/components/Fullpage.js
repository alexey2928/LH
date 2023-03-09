import React from "react";

import Home from "./Home";
import Services from "./Services";
import Portfolio from "./Portfolio";
import About from "./About";

const FullPage = () => {
	return (
		<div>
			<section className="home">
				<Home />
			</section>
			<section className="services">
				<Services />
			</section>
			<section className="portfolio">
				<Portfolio />
			</section>
			<section className="about">
				<About/>
			</section>
		</div>
	);
};

export default FullPage;
