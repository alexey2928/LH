import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store";
import history from "../history"

import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("main"));

root.render(
	<Provider store={store}>
		<Router history={history}>
			<div>
				<Main />
			</div>
		</Router>
	</Provider>
);
