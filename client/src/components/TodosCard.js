import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../context/authContext";
import {useHttp} from "../hooks/httpHook";
import {useHistory} from 'react-router-dom';

export const TodosCard = ({todos}) => {

	const history = useHistory();
	const {token} = useContext(AuthContext);
	const {request} = useHttp();

	const removeTodo = async (projectId) => {
		try {
			await request(`/api/todo/${projectId}`, 'DELETE', null, {
				Authorization: `Bearer ${token}`
			});
		} catch (e) {
		}
	};

	const completeTodo = async (projectId) => {
		try {
			await request(`/api/todo/${projectId}`, 'PUT', null, {
				Authorization: `Bearer ${token}`
			});
			history.push(`/todo-list/${projectId}`);
		} catch (e) {
		}
	};

	useEffect(() => {

	}, [todos]);

	return (
		<div className='container'>
			<h4 className='center'>{todos.length === 0
				? 'You have not any Todo.'
				: 'Project`s Todos.'
			}</h4>
			<div className="collection">
				{todos.map(todo => (
					<p
						key={todo._id}
						className="collection-item">
						{todo.todoName}

						{
							todo.isCompleted
								? null
								: (
									<>
										<button
											onClick={() => removeTodo(todo._id)}
											className='red-text right'
										>
											Remove
										</button>
										<button
											onClick={() => completeTodo(todo._id)}
											style={{marginRight: 10}}
											className='green-text right'>
											Complete
										</button>
									</>
								)
						}

						<span
							className='black-text right'
							style={{marginRight: 10}}>
							Status: {todo.isCompleted
							? <span className="green-text">Completed</span>
							: <span className="red-text">Not completed</span>}
						</span>

						{
							todo.finishDate &&
							<span
								className='red-text right'
								style={{marginRight: 10}}>
							Finish up to: {todo.finishDate && todo.finishDate.slice(0, -14)}
							</span>
						}

						<span
							className='blue-text right'
							style={{marginRight: 10}}>
							Created at: {todo.startDate.slice(0, -14)}
						</span>

					</p>
				))}
			</div>
		</div>
	);
};