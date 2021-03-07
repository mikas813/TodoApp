import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/authContext";
import {useHttp} from "../hooks/httpHook";
import {useMessage} from "../hooks/message.hook";
import {useParams} from 'react-router-dom';

export const TodoList = () => {

	const auth = useContext(AuthContext);
	const {request, clearError, error} = useHttp();
	const message = useMessage();
	const projectId = useParams().id;

	const [todoData, setTodoData] = useState({
		todoName: '', finishDate: '', projectId
	});

	console.log(projectId);

	const changeHandler = event => {
		setTodoData({...todoData, [event.target.name]: event.target.value});
	};


	useEffect(() => {
		message(error);
		clearError();
	}, [error, message, clearError]);

	useEffect(() => {
		window.M.updateTextFields();
	}, []);

	const createTodoHandler = async () => {
		try {
			await request('/api/todo', 'POST', {...todoData}, {
				Authorization: `Bearer ${auth.token}`
			});
			document.querySelector('#form').reset();
		} catch (e) {
		}
	};


	return (
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
						placeholder="TODO name"
					/>
					<label htmlFor="todoName">Project Name</label>

				</div>
				<div className="filds">
					<input
						onChange={changeHandler}
						value={todoData.finishDate}
						name='finishDate'
						type="date"
						id="date"
						placeholder="Finish name"
					/>
				</div>

				<div className="input-field col s12">
					<a
						onClick={createTodoHandler}
						className="btn-floating btn-large waves-effect waves-light red">
						<i className="material-icons">+</i>
					</a>

				</div>
			</form>
		</div>
	);
};