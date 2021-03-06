import React from 'react';
import {Link} from "react-router-dom";

export const Header = () => (
	<nav>
		<div className="nav-wrapper container">
			<Link to='/' className="brand-logo">TodoApp</Link>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					<Link to='/'>Projects</Link>
				</li>
				<li>
					<Link to='/create-project'>Create Project</Link>
				</li>
			</ul>
		</div>
	</nav>
);