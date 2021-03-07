import React from 'react';
import {Link} from "react-router-dom";

export const ProjectCard = ({project}, handleRemove) => {
	return (
		<div className='container'>
			<h3 className='center'>Your projects.</h3>
			<div className="collection">
				{project.map(project => (
					<Link key={project.userId} to="/todo-list"
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