import React from "react";
import "antd/dist/antd.css";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./containers/Profile/Profile";
import "./overrides/overrides.css";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/profile'>
						<Profile />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
