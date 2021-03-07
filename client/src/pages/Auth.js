import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {login, register} from "../redux/actions/userAction";

const Auth = (props) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const userSignUp = useSelector((state) => state.userRegister);

	const {loading, userInfo, error} = userSignUp;
	const dispatch = useDispatch();



	const submitHandler = async (e) => {
		e.preventDefault();

		dispatch(register(email, password));
		await axios.post('/api/auth/register', {email, password});
	};


	return (
		<div className="form-container card deep-orange lighten-5 ">
			<h4>Todo App</h4>
			<form onSubmit={(e) => submitHandler(e)}>
				{error && <div className="red-text">Invalid email or password</div>}
				<div className="filds">
					<input
						type="text"
						id="firstName"
						placeholder="Firt Name"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="firstName">First Name</label>
				</div>
				<div className="filds">
					{error && <div className="red-text">Invalid email or password</div>}
					<input
						type="password"
						id="password"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label htmlFor="password">Password</label>
				</div>
				<div className="input-field col s12">
					<button className="btn waves-effect waves-light" type="submit" name="action">
						{
							loading
								? 'Login...'
								: 'Login'
						}
					</button>
					<button className="btn waves-effect waves-light" type="submit" name="action">
						{
							loading
								? 'Register...'
								: 'Register'
						}
					</button>
				</div>
			</form>
		</div>
	)
};

export default withRouter(Auth);