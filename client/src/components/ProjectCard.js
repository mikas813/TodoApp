import React from 'react';

export const ProjectCard = ({project}) => {
	return (
		<div className='container'>
			<h3 className='center'>Your projects.</h3>
			<div className="collection">
				{project.map((proj, index) => (
					<a key={index} href="#"
					   className="collection-item">
						{proj.projectName}
					</a>
				))}
			</div>
		</div>
	);
};