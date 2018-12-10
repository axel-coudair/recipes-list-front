import { LIST_RECIPES } from './types'
import axios from 'axios'
import { API_URL } from '../config'
import { getRecipesFromUser } from '../services/recipes'
import Recipe from '../models/Recipe';
import { getIdCurrentUser } from "../helpers"

export const createRecipes = (recipes) => {
	let recipesObjects = []
	recipes.map(({
		id, houseId, title, numberOfEaters, description, isPublic, ingredients
	}) => {
		recipesObjects.push(new Recipe(
			id, houseId, title, numberOfEaters, description, isPublic, ingredients
		))
	})
	return recipesObjects
}

export const getRecipesAction = recipe => {
	return async (dispatch) => {
		try {
			const res = await getRecipesFromUser(getIdCurrentUser());
			dispatch({ type: LIST_RECIPES, payload: createRecipes(res.data.recipes) });
		} catch (error) {
			console.log(error)
		}
	};
}
