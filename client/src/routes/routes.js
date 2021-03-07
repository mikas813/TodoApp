import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Projects} from "../pages/Projects";
import {CreateProject} from "../pages/CreateProject";
import {TodoList} from "../pages/TodoList";
import Auth from "../pages/Auth";

export const useRoutes = isAuth => {

	if (isAuth) {
		return (
			<Switch>

				<Route path='/create-project/'>
					<CreateProject/>
				</Route>

				<Route path={'/'} exact>
					<Projects/>
				</Route>

				<Route path='/todo-list/:id'>
					<TodoList/>
				</Route>

			</Switch>
		)
	}

	return (
		<Switch>
			<Route path="/" exact>
				<Auth />
			</Route>
			<Redirect to="/" />
		</Switch>
	)
};
