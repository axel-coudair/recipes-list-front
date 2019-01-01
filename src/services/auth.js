import axios from 'axios'
import { SERVER_URL } from '../config'
import { headers } from '../helpers'

export async function login(email, password) {
	return axios.post(`${SERVER_URL}/users/sign-in`, {
		email,
		password
	})
}
export async function logout() {
	return axios.get(`${SERVER_URL}/users/logout`, headers)
}

export async function register({ email, password, username, passwordConf }) {
	return axios.post(`${SERVER_URL}/users`, {
		email,
		password,
		username,
		passwordConf
	})
}
