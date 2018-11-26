import { ADD_USER_MESSAGE, ADD_BOT_MESSAGE } from '../actions/types'
import Message from '../models/Message'

export default function messagesReducer(state = [] , action) {
	switch (action.type) {
		case ADD_USER_MESSAGE:
			return [...state, new Message(action.payload)]
		case ADD_BOT_MESSAGE:
			return [...state, new Message(action.payload, true)]
		default:
			return state
	}
}
