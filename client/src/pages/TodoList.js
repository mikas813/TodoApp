import React from 'react';

export const TodoList = () => {

	return (
		<div className="form-container card deep-orange lighten-5 ">
			<h5>Create a Todo.</h5>
			<form>
				<div className="filds">
					<input
						name='name'
						type="text"
						id="firstName"
						placeholder="Project name"
					/>
					<label htmlFor="firstName">Todo Name</label>
				</div>

				<div className="input-field col s12">
					<a
						className="btn-floating btn-large waves-effect waves-light red">
						<i className="material-icons">+</i>
					</a>

				</div>
			</form>
		</div>
	)
};