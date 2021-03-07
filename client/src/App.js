import React from 'react';
import Header from "./components/Header";
import {useRoutes} from "./routes/routes";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";
import {Loader} from "./components/Loader";

function App() {

	const {token, logout, login, userId, ready} = useAuth();

	const isAuthenticated  = !!token;

	const routes = useRoutes(isAuthenticated);


	if (!ready) {
		return <Loader />
	}

	return (
		<AuthContext.Provider value={{token, logout, login, userId, isAuthenticated}}>
			<Router>
				<div className="App">
					<Header/>
					{routes}
				</div>
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
