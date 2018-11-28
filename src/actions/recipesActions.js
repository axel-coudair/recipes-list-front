import { LIST_RECIPES } from './types'
import axios from 'axios'
import { API_URL } from '../config'

export const addRecipes = recipes => {
	return (dispatch, getState) => {
		recipes.map(recipe => {
			dispatch(addRecipes(recipe))
		})
	}
}
export const addRecipe = recipe => {
	return {
		type: LIST_RECIPES,
		payload: recipe
	}
}
