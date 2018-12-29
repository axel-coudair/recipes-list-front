import { LIST_RECIPES } from './types'
import { getRecipesFromUser } from '../services/recipes'
import Recipe from '../models/Recipe';
import { getIdCurrentUser } from "../helpers"
import { postRecipe } from "../services/recipes"

export const postRecipeAction = ({ title,
	numberOfEaters,
	description,
	isPublic,
	ingredients }) => {

	return async (dispatch) => {
		try {
			const res = await postRecipe({
				title,
				description,
				isPublic,
				userId: getIdCurrentUser(),
				numberOfEaters,
				ingredients
			});
			// const res = await getRecipesFromUser(getIdCurrentUser());

			console.log(res)
			dispatch({ type: LIST_RECIPES });
		} catch (error) {
		}
	};
}

export const getRecipesAction = recipe => {
	return async (dispatch) => {
		try {
			const res = await getRecipesFromUser(getIdCurrentUser());
			dispatch({ type: LIST_RECIPES, payload: Recipe.createFromJson(res.data.recipes) });
		} catch (error) {
			console.log(error)
		}
	};
}
