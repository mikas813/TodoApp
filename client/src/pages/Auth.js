import React from 'react';

export const Auth = () => {

	return (
		<div className='container'>
			<div className="row">
				<form className="col s12">

					<div className="row">
						<div className="input-field col s12">
							<input id="email" type="email" className="validate"/>
							<label htmlFor="email">Email</label>
						</div>
					</div>

					<div className="row">
						<div className="input-field col s12">
							<input id="password" type="password" className="validate"/>
								<label htmlFor="password">Password</label>
						</div>
					</div>

					<div className="row">
						<div className="col s12">
							<button className="btn waves-effect waves-light" type="submit" name="action">
								<i className="material-icons right">Login</i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
};