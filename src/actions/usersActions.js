import { login, logout } from '../services/auth';
import { AUTHENTICATED, AUTHENTICATION_ERROR, UNAUTHENTICATED } from './types'

export const loginAction = ({ email, password }) => {
	return async (dispatch) => {
		try {
			const res = await login(email, password);
			dispatch({ type: AUTHENTICATED });
			localStorage.setItem('user', res.data.token);
			window.location.reload();

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
			localStorage.clear();
			await logout();
			dispatch({ type: UNAUTHENTICATED });
			window.location.reload();
		} catch (error) {
			console.log(error)
		}
	}
}