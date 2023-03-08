import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store";

import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("main"));

root.render(
	<Router>
		<Provider store={store}>
			<div>
				<Main />
			</div>
		</Provider>
	</Router>
);
