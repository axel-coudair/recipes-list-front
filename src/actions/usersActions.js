import { login, logout } from '../services/auth';
import { AUTHENTICATED, AUTHENTICATION_ERROR, UNAUTHENTICATED } from './types'
import jwtDecode from "jwt-decode"

export const loginAction = ({ email, password }) => {
	return async (dispatch) => {
		try {
			const res = await login(email, password);
			dispatch({ type: AUTHENTICATED });
			localStorage.setItem('user', res.data.token);
			// history.push('/houses');
		} catch (error) {
			dispatch({
				type: AUTHENTICATION_ERROR,
				payload: 'Invalid email or password'
			});
		}
	};
}
export function signOutAction() {
	return async (dispatch) => {
		try {
			await logout();
			dispatch({ type: UNAUTHENTICATED });
			localStorage.clear();
			// this.props.history.push('/');
		} catch (error) {
			console.log(error)
		}
	}
}