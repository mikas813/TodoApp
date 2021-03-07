import React, {useCallback, useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/authContext";
import {useHttp} from "../hooks/httpHook";
import {useMessage} from "../hooks/message.hook";
import {useParams} from 'react-router-dom';
import {TodosCard} from "../components/TodosCard";
import {useHistory} from 'react-router-dom';

export const TodoList = () => {

	const history = useHistory();
	const auth = useContext(AuthContext);
	const {request, clearError, error} = useHttp();
	const message = useMessage();
	const projectId = useParams().id;
	const [todos, setTodos] = useState([]);
	const [todoData, setTodoData] = useState({
		todoName: '', finishDate: '', projectId
	});

	const changeHandler = event => {
		setTodoData({...todoData, [event.target.name]: event.target.value}, projectId);
	};

	const createTodoHandler = async (e) => {
		e.preventDefault();
		try {
			await request('/api/todo', 'POST', {...todoData}, {
				Authorization: `Bearer ${auth.token}`
			});

		} catch (e) {
		}
	};

	const getTodos = useCallback(async () => {
			try {
				const fetched = await request(`/api/todo/${projectId}`, 'GET', null, {
					Authorization: `Bearer ${auth.token}`
				});
				setTodos(fetched);
			} catch (e) {
			}
		}, [auth.token, request]);

	useEffect(() => {
		getTodos();
		message(error);
		clearError();
	}, [error, message, clearError, getTodos, todos]);

	return (
		<>
		<div className="form-container card deep-orange lighten-5 ">
			<h5>Create a TODO.</h5>
			<form id='form'>
				<div className="filds">
					<input
						onChange={changeHandler}
						value={todoData.todoName}
						name='todoName'
						type="text"
						id="todoName"
					/>
					<label htmlFor="todoName">Project Name</label>
				</div>
				<div className="filds">
					<input
						onChange={changeHandler}
						value={todoData.finishDate}
						name='finishDate'
						type="date"
						min='date'
						id="date"
					/>
					<label htmlFor="date">Finish time</label>
				</div>

				<div className="input-field col s12">
					<button
						onClick={createTodoHandler}
						className="btn-floating btn-large waves-effect waves-light red">
						<i className="material-icons">+</i>
					</button>

				</div>
			</form>
		</div>

			<TodosCard todos={todos}/>
		</>
	);
};