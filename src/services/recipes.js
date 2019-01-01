import axios from 'axios'
import { SERVER_URL } from '../config'

const headers = {
	headers: { Authorization: `JWT ${localStorage.getItem('user')}` }
}

export async function getRecipesFromUser(id) {
	return axios.get(`${SERVER_URL}/recipes/user/${id}`, headers)
}
export async function deleteRecipe(recipeId) {
	return axios.delete(`${SERVER_URL}/recipes/${recipeId}`, headers)
}
export async function updateRecipe(recipeId, recipe) {
	delete recipe.userId
	delete recipe.id
	return axios.patch(`${SERVER_URL}/recipes/${recipeId}`, recipe, headers)
}

export async function postRecipe({
	title,
	description,
	isPublic,
	userId,
	image,
	duration,
	stapes,
	numberOfEaters,
	ingredients
}) {
	return axios.post(
		`${SERVER_URL}/recipes`,
		{
			title,
			description,
			isPublic,
			userId,
			image,
			duration,
			stapes,
			numberOfEaters,
			ingredients
		},
		headers
	)
}
