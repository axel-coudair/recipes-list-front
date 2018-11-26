import { ADD_BOT_MESSAGE, ADD_USER_MESSAGE } from './types'
import axios from 'axios'
import { API_URL } from '../config'

export const sendMessage = message => {
	return (dispatch, getState ) => {
		dispatch(addUserMessage(message))
		return axios
			.post(API_URL, { message, sender:getState().usersReducer.id })
			.then(response => dispatch(addBotResponse(response.data[0])))
			.catch(error => {
				throw new Error(error)
			})
	}
}

export const addBotResponse = data => {
	return {
		type: ADD_BOT_MESSAGE,
		payload: data.text
	}
}

export const addUserMessage = message => {
	return {
		type: ADD_USER_MESSAGE,
		payload: message
	}
}
