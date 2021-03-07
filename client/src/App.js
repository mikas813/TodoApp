import React from 'react';
import Header from "./components/Header";
import {useRoutes} from "./routes/routes";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/authContext";

function App() {

	const {token, logout, login, userId} = useAuth();

	const isAuthenticated  = !!token;

	const routes = useRoutes(isAuthenticated);

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
