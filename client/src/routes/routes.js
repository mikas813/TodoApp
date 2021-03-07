import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Projects} from "../pages/Projects";
import {CreateProject} from "../pages/CreateProject";
import {TodoList} from "../pages/TodoList";
import {TodoDetail} from "../pages/TodoDetails";
import Auth from "../pages/Auth";
import {CreateTodo} from "../pages/CreateTodo";

export const useRoutes = isAuth => {

	if (isAuth) {
		return (
			<Switch>

				<Route path='/create-project'>
					<CreateProject/>
				</Route>

				<Route path='/' exact>
					<Projects/>
				</Route>

				<Route path='/create-todo'>
					<CreateTodo/>
				</Route>

				<Route path='/todo-list'>
					<TodoList/>
				</Route>

				<Route path='/todo-details/:id'>
					<TodoDetail/>
				</Route>

				<Redirect to='/'/>

			</Switch>
		)
	}

	return (
		<Switch>

			<Route path='/auth' exact>
				<Auth/>
			</Route>

			<Redirect to='/auth'/>

		</Switch>
	)
};
