import { INIT_USER_ID } from './types'
import axios from 'axios'
import { API_URL } from '../config'


export const initUserId = () => {
	return {
		type: INIT_USER_ID,
		payload: 	 Math.floor(Math.random() * (10000 - 1000) + 1000)
	}
}
