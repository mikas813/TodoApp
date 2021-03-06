import React from 'react';
import {Header} from "./components/Header";
import {useRoutes} from "./routes/routes";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

	const routes = useRoutes(false);

	return (
		<Router>
			<div className="App">
				<Header/>
				{routes}
			</div>
		</Router>
	);
}

export default App;
