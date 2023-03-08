import React from "react";

import Home from "./Home";
import Services from "./Services";
// import Portfolio from "./Portfolio";
import Navbar from "./Navbar";

const FullPage = () => {
	return (
		<div>
			<Navbar />
			<section className="home">
				<Home />
			</section>
			<section className="services">
				<Services />
			</section>
			<section className="portfolio">
				{/* <Portfolio /> */}
			</section>
		</div>
	);
};

export default FullPage;
