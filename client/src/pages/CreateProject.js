import React, {useContext, useState, useEffect} from 'react';
import {useHttp} from "../hooks/httpHook";
import {AuthContext} from "../context/authContext";
import {useHistory} from 'react-router-dom';
import {useMessage} from "../hooks/message.hook";

export const CreateProject = () => {

	const history = useHistory();
	const auth = useContext(AuthContext);
	const {request, clearError, error} = useHttp();
	const [project, setProject] = useState('');
	const message = useMessage();


	useEffect(() => {
		message(error);
		clearError();
	}, [error, message, clearError]);

	useEffect(() => {
		window.M.updateTextFields();
	}, []);

	const createHandler = async () => {
		try {
			await request('/api/projects', 'POST', {projectName: project, userId: auth.userId}, {
				Authorization: `Bearer ${auth.token}`
			});

			history.push('/projects');
		} catch (e) {
		}
	};

	return (
		<div className="form-container card deep-orange lighten-5 ">
			<h5>Create a new project.</h5>
			<form>
				<div className="filds">
					<input
						name='name'
						type="text"
						id="firstName"
						placeholder="Project name"
						onChange={(e) => setProject(e.target.value)}
					/>
					<label htmlFor="firstName">Project Name</label>
				</div>

				<div className="input-field col s12">
					<a
						onClick={createHandler}
						className="btn-floating btn-large waves-effect waves-light red">
						<i className="material-icons">+</i>
					</a>

				</div>
			</form>
		</div>
	);
};