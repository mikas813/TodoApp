import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {userRegisterReducer, userLoginReducer} from "./redux/reducers/userReducers";


const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
	userSignIn: { userInfo },
};

const reducer = combineReducers({
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
