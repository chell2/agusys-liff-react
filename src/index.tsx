import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DR from "./PageDR";
import RC from "./PageRC";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/1" exact component={DR} />
				<Route path="/2" exact component={RC} />
				<Redirect to="/" />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
