import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../context/authContext";

const Header = () => {
	const auth = useContext(AuthContext);

	const handleLogout = (e) => {
		e.preventDefault();
		auth.logout();
	};

	return (
		<nav>
			<div className="nav-wrapper container">
				<Link to='/' className="brand-logo">TodoApp</Link>
				{auth.isAuthenticated &&
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li>
						<Link to='/'>Projects</Link>
					</li>
					<li>
						<Link to='/create-project'>Create Project</Link>
					</li>
					<li>
						<button onClick={handleLogout}>Log Out</button>
					</li>
				</ul>
				}
			</div>
		</nav>
	);
};
export default Header;