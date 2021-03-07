import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from "../context/authContext";
import {useMessage} from "../hooks/message.hook";
import {useHttp} from "../hooks/httpHook";


const Auth = () => {

	const {loading, request, error, clearError} = useHttp();
	const auth = useContext(AuthContext);
	const message = useMessage();

	const [form, setForm] = useState({
		email: '', password: ''
	});

	const changeHandler = event => {
		setForm({...form, [event.target.name]: event.target.value});
		console.log('', form );
	};

	useEffect(() => {
		console.log(error);
		message(error);
		clearError();
	}, [error, message, clearError]);

	useEffect(() => {
		window.M.updateTextFields();
	}, []);


	const registerHandler = async () => {
		try {
			const data = await request('/api/auth/register', 'POST', {...form});
			message(data.message);
		} catch (e) {
		}
	};

	const loginHandler = async () => {
		try {
			const data = await request('/api/auth/login', 'POST', {...form});
			auth.login(data.token, data.userId);
		} catch (e) {
		}
	};


	return (
		<div className="form-container card deep-orange lighten-5 ">
			<h4>Todo App</h4>
			<form>
				<div className="filds">
					<input
						name='email'
						type="text"
						id="firstName"
						placeholder="Firt Name"
						value={form.email}
						onChange={changeHandler}
					/>
					<label htmlFor="firstName">First Name</label>
				</div>
				<div className="filds">
					<input
						name='password'
						type="password"
						id="password"
						placeholder="Password"
						value={form.password}
						onChange={changeHandler}
					/>
					<label htmlFor="password">Password</label>
				</div>
				<div className="input-field col s12">
					<button
						style={{marginRight: 10}}
						disabled={loading}
						onClick={loginHandler}
						className="btn waves-effect waves-light" type="submit" name="action">
						{
							loading
								? 'Login...'
								: 'Login'
						}
					</button>
					<button
						onClick={registerHandler}
						disabled={loading}
						className="btn waves-effect waves-light" type="submit" name="action">
						{
							loading
								? 'Register...'
								: 'Register'
						}
					</button>
				</div>
			</form>
		</div>
	);
};

export default Auth;