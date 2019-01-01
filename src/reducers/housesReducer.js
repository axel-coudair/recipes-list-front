import {
	GETHOUSES,
	GETHOUSESID,
	GETHOUSESUSERS,
	PUTHOUSESUSERS
} from '../actions/types'

export default function housesReducer(state = [], action) {
	switch (action.type) {
		case GETHOUSES:
			return action.payload
		case GETHOUSESID:
			return action.payload
		case GETHOUSESUSERS:
			return action.payload
		case PUTHOUSESUSERS:
			return action.payload
		default:
			return state
	}
}
