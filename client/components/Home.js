import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div id="home">
			<h1 className="header">Welcome to LH Studio</h1>
			<button>BOOK NOW</button>
			<button>
				<Link to="https://www.instagram.com/makeup_lilgri">FOLLOW ME</Link>
			</button>
		</div>
	);
};

export default Home;
