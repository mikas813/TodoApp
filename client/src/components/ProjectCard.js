import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/authContext";
import {useHttp} from "../hooks/httpHook";
import {useHistory} from 'react-router-dom';

export const ProjectCard = ({project}) => {

	const history = useHistory();
	const {token} = useContext(AuthContext);
	const {request} = useHttp();

	const removeProject = async (projectId) => {
		try {
			await request(`/api/projects/${projectId}`, 'DELETE', null, {
				Authorization: `Bearer ${token}`
			});
			history.push('/');
		} catch (e) {
		}
	};

	return (
		<div className='container'>
			<div className='center'>
				{
					project.length === 0
						? (
							<>
								<h4>You have not any Project yet.</h4>
								<Link to="/create-project">Create a new project.</Link>
							</>
						)
						: <h4>Your projects.</h4>
				}</div>
			<div className="collection">
				{project.map(project => (
					<Link
						key={project._id} to={`/todo-list/${project._id}`}
						className="collection-item">
						{project.projectName}
						<span
							onClick={() => removeProject(project._id)}
							className='red-text right'>Remove</span>
					</Link>
				))}
			</div>
		</div>
	);
};