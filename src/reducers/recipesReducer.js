import { LIST_RECIPES } from '../actions/types'

export default function recipesReducer(state = [], action) {
	switch (action.type) {
		case LIST_RECIPES:
			return action.payload
		default:
			return state
	}
}
