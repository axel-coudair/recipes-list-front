import { LIST_RECIPES } from './types'
import axios from 'axios'
import { API_URL } from '../config'

export const getRecipes = recipe => {
	return {
		type: LIST_RECIPES,
		payload: recipe
	}
}
