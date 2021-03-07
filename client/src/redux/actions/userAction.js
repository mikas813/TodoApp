import Axios from 'axios';
import Cookie from 'js-cookie';
import {
	USER_LOGOUT,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAILURE,
} from '../constants/userConstants';

const login = (email, password) => async (dispatch) => {
	dispatch({ type: USER_LOGIN_REQUEST, payload: { email, password } });
	try {
		const { data } = await Axios.post('/api/auth/login', {
			email,
			password,
		});
		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
		Cookie.set('userInfo', JSON.stringify(data));
	} catch (e) {
		dispatch({ type: USER_LOGIN_FAILURE, payload: e.message });
	}
};

const register = (email, password) => async (dispatch) => {
	dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password } });
	try {
		const { data } = await Axios.post('/api/auth/register', {
			email,
			password,
		});
		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
	} catch (e) {
		dispatch({ type: USER_REGISTER_FAILURE, payload: e.message });
	}
};

const logout = () => (dispatch) => {
	Cookie.remove('userInfo');
	dispatch({ type: USER_LOGOUT });
};

export { login, register, logout };
