import { INIT_USER_ID } from '../actions/types'
import User from '../models/User'

export default function usersReducer(state = new User() , action) {
	switch (action.type) {
		case INIT_USER_ID:
			return {...state, id:action.payload}
		default:
			return state
	}
}
