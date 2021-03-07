import React from 'react';
import {Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';

export const ProjectCard = ({project}, handleRemove) => {

	const history = useHistory();

	const handlePassId = () => {
		history.push(`id: ${project._id}`)
	};

	return (
		<div className='container'>
			<h3 className='center'>Your projects.</h3>
			<div className="collection">
				{project.map(project => (
					<Link
						onClick={handlePassId}
						key={project.userId} to={`/todo-list/${project._id}`}
					   className="collection-item">
						{project.projectName}
						<span
							onClick={() => handleRemove(project.id)}
							className='red-text right'>Remove</span>
					</Link>
				))}
			</div>
		</div>
	);
};