import { AUTHENTICATED, AUTHENTICATION_ERROR, UNAUTHENTICATED } from '../actions/types'

import User from '../models/User'

export default function usersReducer(state = {}, action) {
	switch (action.type) {
		case AUTHENTICATED:
			return { ...state, authenticated: true };
		case UNAUTHENTICATED:
			return { ...state, authenticated: false };
		case AUTHENTICATION_ERROR:
			return { ...state, error: action.payload };
		default:
			return state
	}
}